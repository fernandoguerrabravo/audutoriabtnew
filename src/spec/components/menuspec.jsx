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
export default function MenuSpec({hidden,sethidden}) {
  //const { isAuthenticated, logout, user } = useAuth0();
 
  return (
    <div>
      <React.Fragment>
        <Head title="Compliance Robot"></Head>
        <Block>
          <PreviewAltCard className="border-secondary">
            <CardTitle tag="h4" className="text-muted">
              Compliance Robot
            </CardTitle>
            <img
              className="text-end"
              src="184053149_fb-image.jpg"
              alt="usa"
              width="300"
              height="150"
              align="right"
            ></img>
            <hr></hr>
            <br></br>

            <Row className="g-gs">
              <Col lg="6">
                <Card className="card-bordered">
                  <CardBody className="card-inner">
                    <img
                   
                      src="Home_Card_Product.a28c2903.webp"
                      alt=""
                      width="100"
                      height="100"
                    />
                    <small className="text-muted">Products Documentation</small>
                    <div className="text-right">
                      <Button color="primary" onClick={() => sethidden({dashboard:false, menuspec:false, categories: true})}>GO!</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="card-bordered">
                  <CardBody className="card-inner">
                    <img
                      
                      src="Home_Card_Shipping.29a30351.webp"
                      alt=""
                      width="100"
                      height="100"
                    />
                    <small className="text-muted">Shipping Documentation</small>
                    <div className="text-right">
                      <Button color="primary">GO!</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PreviewAltCard>
          <Row className="g-gs">
            <Col lg="2"></Col>
            {/* <PreviewAltCard className="border-secondary h-10 text-center">
                  <spam>
                    {" "}
                    <Button
                      color="secondary"
                      onClick={() => sethidden({ todo: false, report: true })}
                    >
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-groceries-64.png"
                        width="30"
                        height="30"
                        alt="usa"
                      ></img>
                      &nbsp;&nbsp;Groceries<br></br>
                    </Button>
                  </spam>{" "}
                  <spam>
                    {" "}
                    <Button color="secondary">
                      <img
                        className="text-end"
                        align="right"
                        src="icons8-cocina-64.png"
                        width="30"
                        height="30"
                        alt="usa"
                      ></img>
                      &nbsp;&nbsp;Kitchen<br></br>
                    </Button>{" "}
                    <br></br>
                    <br></br>
                  </spam>{" "}
                  <spam>
                    {" "}
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
