/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CardTitle } from "reactstrap";
import {
  Icon,
  TooltipComponent,
  PreviewAltCard,
  Button,
  Col,
  Row,
} from "../../components/Component";
import { Card } from "reactstrap";
import { Badge } from "reactstrap";
import { Timeline, TimelineEvent, TimelineBlip } from "react-event-timeline";
import { fromUnixTime } from "date-fns";
import { UseGetReport } from "../hooks/usegetreporte";
import GetReportes from "../helpers/getreportes";                
import { Spinner } from "reactstrap";
import Center from "react-center";
import { pricingTableDataV1, pricingTableDataV2 } from "./PricingTableData";

const Report = ({ idioma, setidioma }) => {
  const [s1, sets1] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalTab, setModalTab] = useState("1");

  const getValues = async () => {
    await GetReportes("grocery", idioma).then((resp) => {
      sets1(resp);
    });
  };
  useEffect(() => {
    getValues();
  }, []);

  console.log(s1);
  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        <CardTitle>
          <h5 className="title text-primary">Mandatory Requirements</h5>
        </CardTitle>
        <div className="card-tools text-secondary">
          <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="top"
            id="tooltip_step"
            text="Mandatory Requeriments Import to USA"
          />{" "}
        </div>
      </div>
      <div>
        {/* <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleTranslate}>Translate</button> */}
      </div>
      <hr></hr>
      <Row>
        <Col lg="6" md="6">
          <PreviewAltCard>
            {s1.length ? (
              <Timeline>
                {s1.length > 0 ? (
                  s1.map((resp, index) => (
                    <div key={index}>
                      <TimelineEvent
                        title={<strong>{resp.title}</strong>}
                        createdAt=""
                        icon={
                          <Icon
                            className="text-primary"
                            name="circle-fill"
                          ></Icon>
                        }
                        iconColor="#136C7E"
                      >
                        <strong>
                          <span className="title text-dark">
                            <ul>
                              {" "}
                              {resp.detail.map((detalle, index) => (
                                <li key={index}> - {detalle}</li>
                              ))}
                            </ul>
                          </span>
                        </strong>
                      </TimelineEvent>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </Timeline>
            ) : (
              <Spinner color="primary" />
            )}
          </PreviewAltCard>
        </Col>
        <Col lg="4" md="4">
          <Col lg="12" md="12">
            <PreviewAltCard>
              Servicio Pro
              <ul>
                <li>Respuestas en 24 Horas</li>
                <li>Asistencia Remota</li>
                <li>Infome de Diagnóstico de Riesgo</li>
                <li>Suscripción Anual de Soporte Profesional</li>
              </ul>
            </PreviewAltCard>
          </Col>
          <Col lg="12" md="12">
            <PreviewAltCard>
              Servicio Premium - Respuesta 24 Hrs. - Asistencia Remota Mensual
              (3 Reuniones al mes 30 Minutos) - Diagnostico de Riesgo de 1
              Producto Seleccionado -
            </PreviewAltCard>
          </Col>
          <Col lg="12" md="12">
            <PreviewAltCard>
              Servicio Premium - Respuesta 24 Hrs. - Asistencia Remota Mensual
              (3 Reuniones al mes 30 Minutos) - Diagnostico de Riesgo de 1
              Producto Seleccionado -
            </PreviewAltCard>
          </Col>
        </Col>
      </Row>
      <Row className="g-gs">
        <Col md={6} xxl={3}>
          <Card className="recommend">
            <div className="pricing-head">
              <div className="pricing-title">
                <h4 className="card-title title">Light</h4>
                <p className="sub-text">Basic Level of Services</p>
              </div>
              <div className="card-text">
                <Row>
                  <Col size={6}>
                    <span className="h4 fw-500">365</span>
                    <span className="sub-text">Days Suscription</span>
                  </Col>
                  <Col size={6}>
                    <span className="h4 fw-500">72 Hrs</span>
                    <span className="sub-text">Reponse</span>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>
                  <span className="w-50">Annual Subscription</span> -{" "}
                  <span className="ml-auto">USD$300</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="basicannual"
                    text="This subscription allows customers to have access to system tools, 72-hour response, Virtual Meeting with associated cost"
                  />{" "}
                </li>
                <li>
                  <span className="w-50">Preliminar Report</span> -{" "}
                  <span className="ml-auto">USD$650</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="basicreport"
                    text={
                      <ul>
                        <li>
                          Determination of the regulatory requirements that
                          allow the company to import its products to the US
                          market.
                        </li>
                        <li>
                          Professional advice on the initial steps to export and
                          import to the USA.
                        </li>
                        <li>
                          Definition of regulations that apply to Seller's
                          product categories in the USA.
                        </li>
                      </ul>
                    }
                  />{" "}
                </li>
                <li></li>
                <li></li>
              </ul>
              <div className="pricing-action">
                <Button color="light" outline>
                  Choose this plan
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6} xxl={3}>
          <Card className="recommend">
            <div className="pricing-head">
              <div className="pricing-title">
                <h4 className="card-title title">Silver</h4>
                <p className="sub-text">Best Level of Services</p>
              </div>
              <div className="card-text">
                <Row>
                  <Col size={6}>
                    <span className="h4 fw-500">365</span>
                    <span className="sub-text">Days Suscription</span>
                  </Col>
                  <Col size={6}>
                    <span className="h4 fw-500">48 Hrs</span>
                    <span className="sub-text">Reponse</span>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>
                  <span className="w-50">Annual Subscription</span> -{" "}
                  <span className="ml-auto">USD$500</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="report"
                    text="This subscription allows customers to have access to system tools, 48-hour response, and permanent advice from our specialist team and to generate virtual meetings on our platform."
                  />{" "}
                </li>
                <li>
                  <span className="w-50">Preliminar Report</span> -{" "}
                  <span className="ml-auto">USD$550</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="subscription"
                    text={
                      <ul>
                        <li>
                          Determination of the regulatory requirements that
                          allow the company to import its products to the US
                          market.
                        </li>
                        <li>
                          Professional advice on the initial steps to export and
                          import to the USA.
                        </li>
                        <li>
                          Definition of regulations that apply to Seller's
                          product categories in the USA.
                        </li>
                      </ul>
                    }
                  />{" "}
                </li>
                <li></li>
                <li></li>
              </ul>
              <div className="pricing-action">
                <Button color="light" outline>
                  Choose this plan
                </Button>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={6} xxl={3}>
          <Card className="recommend">
            <Badge color="primary" className="pricing-badge">
              Recommend
            </Badge>

            <div className="pricing-head">
              <div className="pricing-title">
                <h4 className="card-title title">Pro</h4>
                <p className="sub-text">Advanced Level of Services</p>
              </div>
              <div className="card-text">
                <Row>
                  <Col size={6}>
                    <span className="h4 fw-500">365</span>
                    <span className="sub-text">Days Suscription</span>
                  </Col>
                  <Col size={6}>
                    <span className="h4 fw-500">24 Hrs</span>
                    <span className="sub-text">Reponse</span>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>
                  <span className="w-50">Annual Subscription</span> -{" "}
                  <span className="ml-auto">USD$948</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="report"
                    text="This subscription allows customers to have access to system tools, 24-hour response, and permanent advice from our specialist team and to generate virtual meetings on our platform."
                  />{" "}
                </li>
                <li>
                  <span className="w-50">Preliminar Report</span> -{" "}
                  <span className="ml-auto">USD$350</span>
                  <TooltipComponent
                    icon="help-fill"
                    iconClass="card-hint"
                    direction="top"
                    id="subscription"
                    text={
                      <ul>
                        <li>
                          Determination of the regulatory requirements that
                          allow the company to import its products to the US
                          market.
                        </li>
                        <li>
                          Professional advice on the initial steps to export and
                          import to the USA.
                        </li>
                        <li>
                          Definition of regulations that apply to Seller's
                          product categories in the USA.
                        </li>
                      </ul>
                    }
                  />{" "}
                </li>
                <li></li>
                <li></li>
              </ul>
              <div className="pricing-action">
                <Button color="light" outline>
                  Choose this plan
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* <pre>{s1[0]?.title}</pre> */}
      {/* {s1.length > 0 ? s1.map((resp, index) => {
              <div key={index}>
                
                {resp.title}
                
              </div>;
            }): "en espera"} */}

      <br></br>
    </React.Fragment>
  );
};
export default Report;
