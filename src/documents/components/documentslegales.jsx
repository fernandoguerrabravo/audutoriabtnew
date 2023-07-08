import React, { useState, useEffect } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { CardTitle } from "reactstrap";
import {
  Icon,
  TooltipComponent,
  Button,
  Row,
  Block,
} from "../../components/Component";
import DataTable from "react-data-table-component";
import { GetDocumentos } from "../helpers/getdocumentos";
import Subirfiles from "./subirarchivos";
import { DeleteDocument } from "../helpers/deletedocuments";
import Swal from "sweetalert2";
import { BajarDocument } from "../helpers/bajardocumentos";

const DocumentsLegales = ({clave, user}) => {
 
  const [documents, setdocuments] = useState();
  


  useEffect(() => {
    GetDocumentos(clave).then((response) => setdocuments(response));
  }, [clave]);

  const ActionComponent = ({ id, text, color, icon, row, onClick }) => {
    const clickHandler = () => onClick(row);
    return (
      <Button onClick={clickHandler}>
        <>
          <div className={`card-tools text-${color}`}>
            <TooltipComponent
              icon={icon}
              direction="left"
              id={id}
              text={text}
            />
          </div>
        </>
      </Button>
    );
  };

  const deleterow = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteDocument(e).then(() => {
          const newstate = documents.filter((item) => item.name !== e);
          setdocuments(newstate);
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const bajar = (e) => {
    BajarDocument(e).then((resp) => window.open(resp, "_blank"));
  };

  const columnas = [
    {
      name: "File Name",
      selector: (row) => `${row.name}`,
      cell: (row) => (row ? row.name.split(`documents/shipping/`) : null),
    },
    // {
    //   name: "Size",
    //   selector: (row) => row.size,
    // },
    {
      cell: (row) => (
        <>
          <ActionComponent
            id="tooltip-2"
            text="Download File"
            color="success"
            icon="file-download"
            row={row.name}
            onClick={bajar}
          ></ActionComponent>
          {/* <ActionComponent
            id="tooltip-1"
            text="Delete File"
            color="danger"
            icon="trash"
            row={row.name}
            onClick={deleterow}
          ></ActionComponent> */}
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        {/* <CardTitle>
         
        </CardTitle> */}
        <div className="card-tools text-secondary">
          {/* <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="top"
            id="tooltip_documents"
            text="Registers, Passports, Power Attorney, Tax Id Register, Orher Legals"
          /> */}
          &nbsp; &nbsp; &nbsp;
          {/* <Button onClick={upload} size="sm" color="primary">
            <Icon name="upload-cloud" />
            <span>Upload</span>
          </Button> */}
        </div>
      </div>{user}
      <DataTable
        responsive
        pointerOnHover
        dense
        striped
        //pagination
        columns={columnas}
        data={documents}
      />
      <Subirfiles></Subirfiles> 
    </React.Fragment>
  );
};
export default DocumentsLegales;
