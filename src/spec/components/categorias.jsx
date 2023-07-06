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
export default function Categories({ hidden, sethidden }) {
  //const { isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <React.Fragment>
        <Head title="Compliance Robot"></Head>
        <Block>
          <PreviewAltCard className="border-secondary">
            <CardTitle tag="h4" className="text-muted">
              Select Category
            </CardTitle>
            <hr></hr>
            <div className="d-inline-flex">
              <Button color="primary">
                {" "}
                <img
                  src="icons8-groceries-64.png"
                  alt=""
                  width="40"
                  height="40"
                />
                <span>Food</span>
              </Button>
              &nbsp;&nbsp;
              <Button color="primary">
                {" "}
                <img src="icons8-cocina-64.png" width="40" height="40" alt="" />
                <span>Kitchen</span>
              </Button>
              &nbsp;&nbsp;
              <Button color="primary">
                {" "}
                <img src="icons8-toys-64.png" width="40" height="40" alt="" />
                <span>Toys</span>
              </Button>
              &nbsp;&nbsp;
              <Button color="primary">
                {" "}
                <img
                  src="icons8-zapato-caballero-64.png"
                  width="40"
                  height="40"
                  alt=""
                />
                <span>Shoes</span>
              </Button>
              &nbsp;&nbsp;
              <Button color="primary">
                {" "}
                <img src="icons8-casa-68.png" width="40" height="40" alt="" />
                <span>Home</span>
              </Button>
              &nbsp;&nbsp;
            </div>
          </PreviewAltCard>
          <Row className="g-gs">
            <Col lg="2"></Col>
            {/* 
                  
                   
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-toys-64.png"
                        width="30"
                        height="30"
                        alt="usa"
                      ></img>
                      <span>&nbsp;&nbsp;Toys</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Button>
                  </spam>{" "}
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        src="icons8-zapato-caballero-64.png"
                        width="30"
                        height="30"
                        alt="usa"
                      ></img>
                      <span>&nbsp;&nbsp;Shoes</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </Button>
                    <br></br>
                    <br></br>
                  </spam>{" "}
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-casa-68.png"
                        width="30"
                        height="30"
                        alt="usa"
                      ></img>
                      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;
                    </Button>
                  </spam>
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-computer-64.png"
                        width="100"
                        height="100"
                        alt="usa"
                      ></img>
                      &nbsp; &nbsp;&nbsp;&nbsp;PC&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                      &nbsp;
                    </Button>
                  </spam>{" "}
                </PreviewAltCard> */}
            {/* <Col lg="6">
                <PreviewAltCard className="h-100 border-secondary">
                  <Button color="secondary">
                    <img
                      className="text-end"
                      align="right"
                      src="icons8-paquete-94.png"
                      width="64"
                      height="64"
                      alt="usa"
                    ></img>
                    &nbsp;&nbsp;Product<br></br>
                  </Button>&nbsp;&nbsp;
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-paquete-94.png"
                        width="64"
                        height="64"
                        alt="usa"
                      ></img>
                      &nbsp;&nbsp;Product<br></br>
                    </Button>
                  </spam>
                  <br></br>
                  <br></br>
                  <Button color="secondary">
                    <img
                      className="text-end"
                      align="right"
                      src="icons8-paquete-94.png"
                      width="64"
                      height="64"
                      alt="usa"
                    ></img>
                    &nbsp;&nbsp;Product<br></br>&nbsp;&nbsp;Documentation
                  </Button>
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-paquete-94.png"
                        width="64"
                        height="64"
                        alt="usa"
                      ></img>
                      &nbsp;&nbsp;Product<br></br>&nbsp;&nbsp;Documentation
                    </Button>
                  </spam>
                  <br></br>
                </PreviewAltCard>
              </Col> */}
            <Col lg="12">
              {hidden.report ? (
                <PreviewAltCard className="h-100 border-secondary">
                  <Report></Report>
                </PreviewAltCard>
              ) : null}
            </Col>{" "}
          </Row>
        </Block>
      </React.Fragment>
    </div>
  );
}
