/* eslint-disable no-unused-vars */
import React from "react";
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

//import { useAuth0 } from "@auth0/auth0-react";
//import ListHtsTools from "./ListHtsTools";
//import ListHtsTable from "./ListHtsTable";

export default function Select() {
  //const { isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <React.Fragment>
        <Head title="Compliance Robot"></Head>
        <Content>
          <BlockHead size="sm"> </BlockHead>
          <br></br>
          <BlockHead size="sm">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Compliance Robot Version
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Smart Compliance Services</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent></BlockHeadContent>
          </BlockHead>
          <Block>
            <Row className="g-gs">
              <Col lg="6">
                <PreviewAltCard className="h-100 border-secondary">
                  {" "}
                  <img
                    className="text-end"
                    align="left"
                    width="150"
                    height="200"
                    src="icons8-robot-3-400.svg"
                    alt="robot"
                  ></img>
                  <h5>
                    {" "}
                    <small className="text-justify">
                      We currently provide assistance on Product documentation,
                      Shipping documentation, and requirements for exporting to
                      the United States of America (USA). <p></p>
                      <p></p>
                      USA has a set of import regulations with certifications
                      and labelling requirements for certain products, which are
                      required to be met by you. <p></p>
                      <p></p>We provide you with a one-stop solution to get the
                      information in relation to the import requirements.
                    </small>
                  </h5>
                  <img
                    className="text-end"
                    align="right"
                    src="icons8-usa-64.png"
                    alt="usa"
                  ></img>
                </PreviewAltCard>
              </Col>
             
              <Col lg="4" md="4">
                <PreviewAltCard className="border-secondary h-10">
                  <SearchProduct></SearchProduct>
                </PreviewAltCard>
              </Col>
              <br></br>
              <Col lg="12">
                <PreviewAltCard className="h-100 border-secondary"></PreviewAltCard>
              </Col>{" "}
            </Row>
          </Block>
        </Content>
      </React.Fragment>
    </div>
  );
}
