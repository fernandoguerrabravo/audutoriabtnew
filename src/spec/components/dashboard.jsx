/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
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
  BlockBetween,
} from "../../components/Component";
import SearchProduct from "./SearchProduct";
import Sellerstep from "./sellerstep";
import Report from "./report";
//import { useAuth0 } from "@auth0/auth0-react";
//import ListHtsTools from "./ListHtsTools";
//import ListHtsTable from "./ListHtsTable";
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

export default function DashSpec({hidden,sethidden}) {
  //const { isAuthenticated, logout, user } = useAuth0();
  return (
    <div>
      <React.Fragment>
 
 
        <Block>
          <Row className="g-gs">
            <Col lg="12">
              <PreviewAltCard className="border-secondary">
                {" "}
                <span className="text-mute">
                  <h5>
                    We currently provide assistance on Product documentation,
                    Shipping documentation, and requirements for exporting to
                    the United States of America (USA).
                  </h5>{" "}
                  <p></p> USA has a set of import regulations with
                  certifications and labelling requirements for certain
                  products, which are required to be met by you. <p></p>
                  <p></p>
                  We provide you with a one-stop solution to get the information
                  in relation to the import requirements.
                </span>
                <br></br>
                <br></br>
               
              
                <Card className="card-bordered">
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Disclaimer</CardTitle>
                    <CardText>
                      This information is provided on best-effort basis and
                      provide guidance on applicable compliances with respect to
                      your business, and there is no assurance as to its
                      accuracy, completeness, updates or usefulness or that such
                      information is error-free. Amazon Seller Services Private
                      Limited and its affiliates hereby disclaims any and all
                      liability and assumes no responsibility whatsoever for
                      consequences resulting from use of such information.
                      Please contact your consultants to validate the accuracy
                      and understand your obligations and compliance under the
                      applicable laws (including export related and laws
                      applicable to your sale in destination country). You
                      expressly waive any and all claims, rights of action
                      and/or remedies (under law or otherwise) that you may have
                      against Amazon and/or its affiliates arising out of or in
                      connection with the use of or reliance upon such
                      information.
                    </CardText>
                    <input type="checkbox" />
                    <label>
                      &nbsp;
                      <strong className="text-muted">Confirm Disclaimer</strong>
                    </label>
                    <br></br>
                    <Button color="primary" onClick={() => sethidden({dashboard:false, categories:true})}>START</Button>
                  </CardBody>
                </Card>
              </PreviewAltCard>
            </Col>{" "}
          </Row>
        </Block>
      </React.Fragment>
    </div>
  );
}
