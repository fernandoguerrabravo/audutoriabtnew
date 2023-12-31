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

import Subirfiles from "./subirarchivos";
import { DeleteDocument } from "../helpers/deletedocuments";
import Swal from "sweetalert2";
import { BajarDocument } from "../helpers/bajardocumentos";
import { useAuth0 } from "@auth0/auth0-react";
const Documents = ({ documents, setdocuments }) => {
  const { user } = useAuth0();

  const [modal, setModal] = useState(false);

  const upload = () => {
    setModal(true);
  };

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
      cell: (row) => (row ? row.name.split(`${user.sub}/compliance/`) : null),
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
      {/* <div className="card-title-group align-start mb-2">
        <CardTitle>
          <h6 className="title text-primary">Sellers Legal Documents</h6>
       
         </CardTitle>
        <div className="card-tools text-secondary">
        <TooltipComponent
          icon="info"
          direction="right"
          id="tooltip_documents"
          text="Registers, Passports, Power Attorney, Others"
        />&nbsp; &nbsp; &nbsp; 
          <Button onClick={upload} size="sm" color="primary">
            <Icon name="upload-cloud" />
            <span>Upload</span>
          </Button>
         
        </div>
      </div> */}
      <Content>
        <DataTable
          responsive
          pointerOnHover
          dense
          striped
          columns={columnas}
          data={documents}
        />
      </Content>
    </React.Fragment>
  );
};
export default Documents;
