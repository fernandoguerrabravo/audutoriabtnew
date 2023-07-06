/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
} from "../../components/Component";
import { Timeline, TimelineEvent } from "react-event-timeline";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import GetProducts from "../helpers/getproducts";
export default function SearchSpec({ hidden, sethidden, idioma, setidioma }) {
  const [data, setdata] = useState();
  const [selectedRows, setSelectedRows] = React.useState(false);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);
  const [escondido, setEscondido] = React.useState(false);
  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
    setEscondido(true);
  };
  const [oculto, setcoulto] = useState(false);
  
  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
    console.log(selectedRows);
  };
  const search = () => {
    
    GetProducts("grocery", "cafe molido").then((resp) => {setdata(resp.arreglo); setidioma(resp.idioma)});
    
  };

  const seguir = () => {

      sethidden({
        dashboard: false,
        menuspec: false,
        categories: false,
        searchspec: false,
        informe: true
      })


  }

  const [textos, settextos] = useState();
  const columns = [
    {
      name: "Image",
      sortable: true,
      reorder: true,
      center: true,
      //selector: (row) => row.images[0].image,
      cell: (row) => (
        <>
          <p></p>
          <img src={row.images[0].image} width="50" height="50" alt=""></img>
          <p></p>
          <br></br>
        </>
      ),
    },
    {
      name: "Title",
      sortable: true,
      reorder: true,
      center: true,
      //selector: (row) => row.images[0].image,
      cell: (row) => row.title,
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <>
      <div className="text-center">
        {" "}
        <input className="form-control" />
        <br></br>
        <Button onClick={search} variant="contained" color="primary">
          + Search Product
        </Button>
        <br></br> <br></br> <br></br>
        {escondido ? (
          <Button onClick={seguir} variant="contained" color="secondary">
            Next
          </Button>
        ) : null}
        <DataTableExtensions export={false} print={false} {...tableData}>
          <DataTable
            pagination
            striped
            highlightOnHover
            selectableRows
            onSelectedRowsChange={handleChange}
            clearSelectedRows={toggledClearRows}
          />
        </DataTableExtensions>
      </div>
    </>
  );
}
