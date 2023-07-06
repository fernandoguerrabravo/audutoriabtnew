/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
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
import Content from "../../layout/content/Content";
import Iframe from "react-iframe";
const Principal = () => {
  return (
    <React.Fragment>
      <Head title="Register"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Register
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to GSA Sellers Accelerator</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Row>
        <Col lg="6">
        <Iframe
          url="https://api.leadconnectorhq.com/widget/form/BM014qyI0xBcmO5rcgxA"
          width="700px"
          height="390px"
          id=""
          className=""
          display="block"
          position="relative"
        />{" "}
        </Col>
        <Col lg="6">
        <Iframe
          url="https://app.enzuzo.com/policies/tos/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMjI1MCwiQ3VzdG9tZ"
          width="500px"
          height="1500px"
          id="myId"
          className=""
          display="initial"
          position="relative"
        />
        </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default Principal;
