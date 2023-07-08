/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CardTitle } from "reactstrap";
import {
  Icon,
  TooltipComponent,
  PreviewAltCard,
  Button,
} from "../../components/Component";
import ModalSeller from "./modalseller";
//import { BarChart } from "../../charts/default/Charts";
import Documents from "./documents";
import DocumentsLegales from "./documentslegales";
import { Timeline, TimelineEvent, TimelineBlip } from "react-event-timeline";
// import { useAuth0 } from "@auth0/auth0-react";
const Sellerinfo = ({ seller, setseller }) => {
  // const { user } = useAuth0();
  const [modal, setModal] = useState(false);
  const [modalTab, setModalTab] = useState("1");
  const clave = `btpdi`;
  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        <CardTitle>
          <h5 className="title text-primary">Sellers Information</h5>
        </CardTitle>

        <div className="card-tools text-secondary">
          <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="top"
            id="tooltip_sellers"
            text="Edit or Add Company's Information"
          />{" "}
          &nbsp; &nbsp; &nbsp;
          <Button size="sm" color="primary" onClick={() => setModal(true)}>
            <Icon name="edit" />
            <span>Edit</span>
          </Button>
        </div>
      </div>
      <ul>
        <li>
          <strong>{seller.legalname}</strong>
        </li>
        <li>{seller.tax_id}</li>
        <hr></hr>
        <li>
          {seller.calle}, {seller.numero}, {seller.barrio}
        </li>
        <li>
          {seller.ciudad}, {seller.estado}, {seller.pais},{" "}
        </li>
        <li>Phone: {seller.telefono}</li>
      </ul>
      <hr></hr>
      <ul>
        <li>
          <strong className="text-primary">Contact</strong>
        </li>
        <li>{seller.contactname}</li>
        <li>{seller.email}</li>
      </ul>
      <hr></hr>
      <br></br>
      <DocumentsLegales clave={clave}></DocumentsLegales>

      {/* <ModalSeller
        seller={seller}
        setseller={setseller}
        modal={modal}
        setModal={setModal}
        modalTab={modalTab}
        setModalTab={setModalTab}
      ></ModalSeller> */}
    </React.Fragment>
  );
};
export default Sellerinfo;
