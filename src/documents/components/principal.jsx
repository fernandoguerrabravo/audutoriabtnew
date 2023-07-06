/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
// import { pusher_ecl } from "../../lib";
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Row,
  Col,
  PreviewAltCard,
  BlockBetween,
  Button,
} from "../../components/Component";
// import Sellerinfo from "./sellerinfo";
// import { GetSeller } from "../helpers/getseller";
import { useAuth0 } from "@auth0/auth0-react";
import { monthNames, todaysDate } from "../../utils/Utils";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import DocumentsLegales from "./documentslegales";
import Subirfiles from "./subirarchivos";

const Principal = () => {
  const { user } = useAuth0();
  
  //   var channel = pusher_ecl.subscribe("my-channel");
  //   channel.bind("my-event", function (data) {
  //     alert(JSON.stringify(data));
  //   });
  const clave = `documents/shipping`;
  return (
    <React.Fragment>
      <Head title="Templates"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Templates and Documents
              </BlockTitle>
              <BlockDes className="text-soft">
                <p></p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Row>
         <Col sm="12" md="6" lg="6">
            <PreviewAltCard className="h-100 bg-light">
              <Card className="card-bordered">
                <CardBody className="card-inner">
                  <CardTitle tag="h5">Shipping Documents</CardTitle>
                  <Row>
                    {/* <Col sm="5">
                      <img src="icons8-robot-3-400.svg" alt="" />{" "}
                    </Col>{" "} */}
                    <Col sm="12">
                      <CardText>
                        <DocumentsLegales clave = {clave}></DocumentsLegales>
                      </CardText>{" "}
                    </Col>
                  </Row>
                  <Subirfiles></Subirfiles>
                </CardBody>
              </Card>
            </PreviewAltCard>
          </Col>{" "} 
       </Row>
      </Content>
    </React.Fragment>
  );
};
export default Principal;
