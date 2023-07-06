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
import MenuSpec from "./menuspec";
import DashSpec from "./dashboard";
import Categories from "./categorias";
import SearchSpec from "./SearchProduct";


export default function Principal() {
  //const { isAuthenticated, logout, user } = useAuth0();
  const [hidden, sethidden] = useState({
    dashboard: true,
    menuspec: false,
    categories: false,
    searchspec: false,
    informe: false

  });
  const [idioma, setidioma] = useState(false);
  return (
    
      <React.Fragment>
        <Head title="Compliance Robot"></Head>
        <Content>
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle page tag="h3">
                   General Compliance Tools
                </BlockTitle>
                <BlockDes className="text-soft">
                  <p>Welcome to GSA Sellers Compliance</p>
                </BlockDes>
              </BlockHeadContent>
            </BlockBetween> 
          </BlockHead>
         {hidden.dashboard ? <DashSpec hidden={hidden} sethidden={sethidden}></DashSpec>: null}
         {/* {hidden.menuspec ? <MenuSpec hidden={hidden} sethidden={sethidden}></MenuSpec>: null} */}
         {hidden.categories ? <Categories hidden={hidden} sethidden={sethidden}></Categories>: null}
         {hidden.searchspec ? <SearchSpec hidden={hidden} sethidden={sethidden} setidioma={setidioma}></SearchSpec>: null}
        {hidden.informe ?<Report idioma={idioma} setidioma={setidioma}></Report> : null} 
        </Content>
      </React.Fragment>
    
  );
}
