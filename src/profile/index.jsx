import React from "react";
import { Col, Container, Row } from "reactstrap";
import Principal from "./components/principal";
//import Content from "../../layout/content/Content";
//import Head from "../../layout/head/Head";

const Profiles = ({ ...props }) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Principal></Principal>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Profiles;