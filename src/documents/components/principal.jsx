/* eslint-disable jsx-a11y/alt-text */
import React, { useLayoutEffect, useState, useEffect } from "react";
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
import { UserProviders } from "../../providers/account.provider";

const Principal = () => {
  const [user,setuser] = useState() 
  const GetInfo = async ()  => {
    const mail = await new UserProviders().getMail();
    console.log("USUARIO",mail.mail);
    return mail.mail
  }

  useLayoutEffect(() => { 
    GetInfo().then((info) => setuser(info));
  }, []);
  //   var channel = pusher_ecl.subscribe("my-channel");
  //   channel.bind("my-event", function (data) {
  //     alert(JSON.stringify(data));
  //   });
  const clave = `mybt-auditoria/pdi`;
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
              {/* <BlockDes className="text-soft">
          
              </BlockDes> */}
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
                        <DocumentsLegales clave = {clave} user={user}></DocumentsLegales>
                    </Col>
                  </Row>
                  {/* <Subirfiles></Subirfiles> */}
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
