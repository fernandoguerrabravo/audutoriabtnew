import React, { useState } from "react";
import Swal from "sweetalert2";
import Content from "../../layout/content/Content";
import { Icon, Button } from "../../components/Component";
import { Modal, ModalBody } from "reactstrap";
import {nanoid} from 'nanoid';
import FileProvider from "../providers/file.provider";
import {
  checkFileMIMEType,
  checkFileSize,
  getFormattedSize,
} from "../helpers/files.helper";
import { useAuth0 } from "@auth0/auth0-react";

const blobToBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  }
);

const Subirfiles = ({ modal, setModal }) => {
  const {user} = useAuth0();
  const MAXIMUM_FILES_LIMIT = null;
  /**
   * Size in MB
   */
  const MAXIMUM_FILE_SIZE = 20;
  const ALLOWED_FORMATS = ".pdf, .doc, .docx, .odt, image/*";

  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const getCurrentFiles = async (event) => {
    const rawFiles = event.target.files;
    const fileList = []; // WIll contain an array of type File[]
    if (!rawFiles) {
      return;
    }
    if (rawFiles instanceof Array) {
      rawFiles.forEach((file) => fileList.push(file));
    } else {
      const rawFilesArray = Array.from(rawFiles);
      rawFilesArray.forEach((file) => fileList.push(file));
    }
    const finalFileList = [];
    for (const file of fileList) {
      const extensionSeparatorIndex = file.name.lastIndexOf('.');
      const formattedName = file.name.substring(
        0,
        extensionSeparatorIndex
      );
      const extension = file.name.substr(extensionSeparatorIndex);
      const encodedData = await blobToBase64(file);
      const formattedFile = {
        name: formattedName,
        extension,
        file: encodedData?.toString() ?? '',
        type: 'append',
        size: file.size,
      };
      if (
        files.find(
          (appendedFile) => appendedFile.name === formattedFile.name
        )
      ) {
        Swal.fire({
          icon: 'info',
          title: `The file ${
            formattedFile.name + formattedFile.extension
          } is already added`,
        });
        break;
      }
      if (!checkFileMIMEType(file.type, ALLOWED_FORMATS)) {
        Swal.fire({
          icon: 'warning',
          title:
            'Please select another file (Supported formats: images and PDF)',
          html: `<small class="text-muted">The file ${file.name} is not supported</small>`,
        });
        break;
      }
      if (!checkFileSize(file.size, MAXIMUM_FILE_SIZE)) {
        Swal.fire({
          icon: 'warning',
          title: `The maximum file size is ${MAXIMUM_FILE_SIZE}MB`,
          html: `<small class="text-muted">The file ${
            file.name
          } have a size of ${getFormattedSize(file.size, 2)}</small>`,
        });
        break;
      }
      if (MAXIMUM_FILES_LIMIT) {
        if (files.length < MAXIMUM_FILES_LIMIT) {
          finalFileList.push(file);
        } else {
          Swal.fire({
            icon: 'info',
            title: `The maximum file quantity to upload is ${MAXIMUM_FILES_LIMIT}`,
          });
          break;
        }
      } else {
        finalFileList.push(file);
      }
    }
    if (finalFileList.length > 0) {
      setFiles([...files, ...finalFileList]);
    }
    event.target.value = event.target.defaultValue; // Reset input cached value
  };

  // const onSubmit = async (data) => {
  //   console.log(data)
  //   const formData = new FormData();
  //   const ultimo = data.file.length;
  //   for (let i = 0; i < ultimo; ++i) {
  //     formData.append("file", data.file[i]);
  //     const response = await fetch(
  //       `https://apiecl.com/uploaddocuments?id_seller=${user.sub}/legales`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     ).then((res) => console.log(ultimo));
  //   }

  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Your work has been saved",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   }).then(() => {
  //     setModal(false);
  //     setFilesname([]);
  //   });
  //   //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  // };

  // remove file
  const removeFile = (event, index) => {
    if (event.isTrusted) {
      const currentFiles = Object.create(files);
      currentFiles.splice(index, 1);
      setFiles([...currentFiles]);
    }
  };

  const handleFilesSubmit = async (event) => {
    event.preventDefault();
    for (const file of files) {
      const response = await new FileProvider().sendProfile(file, user)
      if (response.data === 'ok'){
        Swal.fire({
          icon: 'success',
          title: 'Successfuly upload',
          text: 'all right!',
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'You must complete the filter data',
          text: 'Something went wrong!',
        });
      }
    }
  };
  return (
    <React.Fragment>
      {/* <Modal
        isOpen={modal}
        className="modal-dialog-centered"
        size="lg"
        toggle={() => {
          setModal(false);
        }}
      > */}
        {/* <ModalBody> */}
          {/* <a
            href="#dropdownitem"
            onClick={(ev) => {
              ev.preventDefault();
              setModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a> */}
          <div className="p-2">
            <h5 className="title text-primary">Upload Files</h5>
            <hr></hr>
            <Content>
              <form onSubmit={handleFilesSubmit}>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      onChange={getCurrentFiles}
                      multiple
                      id="file-uploader"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="file-uploader"
                    >
                      Choose files
                    </label>
                  </div>
                  </div>
                    <div className="row mt-3">
                      <div className="col">
                        {files.length > 0 && (
                          <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                            type="submit"
                          >
                            Upload listed files
                          </Button>
                        )}
                        <span
                          className={[
                            'text-primary',
                            files.length > 0 && 'float-right',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {files.length > 0 &&
                            `Files in queue (${files.length}):`}
                        </span>
                      </div>
                </div>
                {files.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-info">File Name</th>
                        <th className="text-info">File Size</th>
                        <th className="text-info">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file, index) => (
                        <tr key={nanoid()}>
                          <td>{file.name}</td>
                          <td>{getFormattedSize(file.size, 2)}</td>
                          <td>
                            <Button
                              variant="outlined"
                              type="button"
                              onClick={(event) => removeFile(event, index)}
                              disabled={submitting}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </form>
            </Content>
          </div>
       {/* </ModalBody> */}
      {/* </Modal>  */}
    </React.Fragment>
  );
};

export default Subirfiles;
