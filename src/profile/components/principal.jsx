/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Block, BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Sellerinfo from "./sellerinfo";
import {
  monthNames,
  todaysDate,
} from "../../utils/Utils";
//import { useAuth0 } from "@auth0/auth0-react";
import { GetSeller } from "../helpers/getseller";
//import Products from "../../skus";
import { Col, Container, Row } from "reactstrap";

const Principal = () => {
  //const { user } = useAuth0();
  const [modaldoc, setModaldoc] = useState(false);

   const [seller, setseller] = useState({
       id_cliente: `btpdi`,
  //   user_email: user?.email,
  //   fior: false,
  //   cbporigen: false,
  //   legalname: "",
  //   dbaname: "",
  //   tipocorporacion: "",
  //   tax_id: "",
  //   website: "",
  //   contactname: "",
  //   cargo: "",
  //   email: "",
  //   telefono: "",
  //   watsap: "",
  //   ejecutivoamazon: "",
  //   categorias: "",
  //   servicios: "",
  //   negocios: "",
  //   numero: "",
  //   calle: "",
  //   barrio: "",
  //   ciudad: "",
  //   estado: "",
  //   pais: "",
  //   iso: "",
  //   zip: "",
  //   active: false,
  //   paysetup: false,
  //   terms: "",
  //   fecha: `${
  //     monthNames[todaysDate.getMonth()]
  //   } ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`,
   });

  // useEffect(() => {

  //   GetSeller(user?.sub).then((response) => {
  //     setseller(response[0]);

  //     // if (response.length === 0) {
  //     //   sethidden({
  //     //     welcome: false,
  //     //     welcome1: false,
  //     //     welcome2: false,
  //     //     welcome3: false,
  //     //     welcome4: false,
  //     //     welcome5: false,
  //     //     welcome6: false,
  //     //     dashboard: false,
  //     //     welcome0: true,
  //     //   });
  //     // } else {
  //       // sethidden({
  //       //   welcome: false,
  //       //   welcome1: false,
  //       //   welcome2: false,
  //       //   welcome3: false,
  //       //   welcome4: false,
  //       //   welcome5: false,
  //       //   welcome6: false,
  //       //   welcome0: false,
  //       //   dashboard: true,
  //       // });
  //     // }
  //   });
  // }, [setseller, user, setModaldoc, modaldoc]);

  return (
    <>
      <React.Fragment>
        <Head title="GSA SELLER Prior Notice Support"></Head>
        <Content >
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle page>Sellers Profile</BlockTitle>
                <BlockDes className="text-soft">
                  <p>Easy, Reliable and Fast</p>
                </BlockDes>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>
          <div className="card-stretch">
            <div className="card-inner"></div>
            <Block size="lg">
              <Container>
                <Row>
                  <Col lg='4'>
                    <PreviewCard>
                   <Sellerinfo seller={seller} setseller={setseller} /> 
                    </PreviewCard>
                  </Col>
                  <Col lg='8'>
                    <PreviewCard>
                      {/* <Products /> */}
                    </PreviewCard>
                  </Col>
                </Row>
              </Container>
            </Block>
          </div>
        </Content>
      </React.Fragment>
    </>
  );
};
export default Principal;
