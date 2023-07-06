/* eslint-disable no-sequences */
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
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Updateregister } from "../helpers/updateregister";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";

//import Iframe from "react-iframe";
const Finregistro = () => {
  const { user } = useAuth0();
  let { id } = useParams();

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return window.location.replace(`${process.env.PUBLIC_URL}/`)
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  useEffect(() => {
    Updateregister(id, user.email, user.sub);
  },[id, user.email, user.sub]);


  return (
    <React.Fragment>
      <Head title="Register"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Successful Registration
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to GSA Sellers Compliance</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Row>
          <Col lg="6">
            Thanks for submiting details, Will get back to you soon!
          </Col>
          
          <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#004777"]}
          onComplete={() => [true, 1000]}
        >
           {renderTime}
        </CountdownCircleTimer>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default Finregistro;
