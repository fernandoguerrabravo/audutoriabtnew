/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal, ModalBody, FormGroup } from "reactstrap";
import {
  Button,
  Icon,
  Col,
  Row,
  RSelect,
} from "../../components/Component";
//import { codes } from "iso-country-codes";

//import { sellerseller } from "../helpers/sellerseller";
import Swal from "sweetalert2";
import { currentTime, monthNames, todaysDate } from "../../utils/Utils";
import { getCode, getName ,getData } from 'country-list';
import { Updateseller } from "../helpers/updatseller";
//import { useAuth0 } from "@auth0/auth0-react";
const ModalSeller = ({ seller, setseller, modal, setModal, modalTab, setModalTab }) => {
  const countries = [];
  getData().forEach((element) =>
    countries.push({ value: element.alpha2, label: element.name })
  );
  //const { isAuthenticated, logout, user } = useAuth0();
 

  const exchange = (e) => {
    setseller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const changepais = (e) => {
    setseller({
      ...seller,
      pais: e.label,
      iso: e.value
    });
  };

  const sellerfinal = () => {
    Updateseller(seller).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(()=> setModal(false));
    });
  };

  return (
    <Modal
      isOpen={modal}
      className="modal-dialog-centered"
      size="lg"
      toggle={() => setModal(false)}
    >
      <ModalBody>
        <a
          href="#dropdownitem"
          onClick={(ev) => {
            ev.preventDefault();
            setModal(false);
          }}
          className="close"
        >
          <Icon name="cross-sm"></Icon>
        </a>
        <div className="p-2">
          <h5 className="title">Seller Profile</h5>
          <ul className="nk-nav nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${modalTab === "1" && "active"}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  setModalTab("1");
                }}
                href="#personal"
              >
                Personal
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${modalTab === "2" && "active"}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  setModalTab("2");
                }}
                href="#address"
              >
                Company
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${modalTab === "3" && "active"}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  setModalTab("3");
                }}
                href="#address"
              >
                Address
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane ${modalTab === "1" ? "active" : ""}`}
              id="personal"
            >
              <Row className="gy-4">
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="contact-name">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="contactname"
                      className="form-control"
                      name="contactname"
                      onChange={exchange}
                      defaultValue={seller ? seller.contactname : null}
                      placeholder="Enter Full contact name"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="cargo">
                      Position in the Company
                    </label>
                    <input
                      type="text"
                      id="cargo"
                      className="form-control"
                      name="cargo"
                      onChange={exchange}
                      defaultValue={seller ? seller.cargo : null}
                      placeholder="Enter display name"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      name="email"
                      onChange={exchange}
                      defaultValue={seller ? seller.email : null}
                      placeholder="E-mail"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="telefono">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      className="form-control"
                      name="telefono"
                      onChange={exchange}
                      defaultValue={seller ? seller.telefono : null}
                      placeholder="Phone number"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="telefono">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      id="watsap"
                      className="form-control"
                      name="watsap"
                      onChange={exchange}
                      defaultValue={seller ? seller.watsap : null}
                      placeholder="WhatsApp Number"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="telefono">
                      Last Update
                    </label>
                    <input
                      type="text"
                      id="ws"
                      className="form-control"
                      name="ws"
                      defaultValue={seller ? seller.fechamodificacion : null}
                      placeholder="Last Update"
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="lg" onClick={sellerfinal}>
                        Update Seller
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div
              className={`tab-pane ${modalTab === "2" ? "active" : ""}`}
              id="personal"
            >
              <Row className="gy-4">
                <Col md="12">
                  <FormGroup>
                    <label className="form-label" htmlFor="legalname">
                      Company Legal Name
                    </label>
                    <input
                      type="text"
                      id="legalname"
                      className="form-control"
                      name="legalname"
                      onChange={exchange}
                      defaultValue={seller ? seller.legalname : null}
                      placeholder="Enter Company Legal Name"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="dbaname">
                      Company Initials
                    </label>
                    <input
                      type="text"
                      id="dbaname"
                      className="form-control"
                      name="dbaname"
                      onChange={exchange}
                      defaultValue={seller ? seller.dbaname : null}
                      placeholder="Enter Company Initials"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="tipocorporacion">
                      Corporation Type
                    </label>
                    <input
                      type="text"
                      id="tipocorporacion"
                      className="form-control"
                      name="tipocorporacion"
                      onChange={exchange}
                      defaultValue={seller ? seller.tipocorporacion : null}
                      placeholder="Enter Company Type "
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="ejecutivoamazon">
                      Do you have an amazon ejecutive?
                    </label>
                    <input
                      type="text"
                      id="ejecutivoamazon"
                      className="form-control"
                      name="ejecutivoamazon"
                      onChange={exchange}
                      defaultValue={seller ? seller.ejecutivoamazon : null}
                      placeholder="do you have a amazon agent?"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="tax_id">
                      Tax Identification Number
                    </label>
                    <input
                      type="text"
                      id="tax_id"
                      className="form-control"
                      name="tax_id"
                      onChange={exchange}
                      defaultValue={seller ? seller.tax_id : null}
                      placeholder="Enter tax number"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="website">
                      Web Site
                    </label>
                    <input
                      type="text"
                      id="website"
                      className="form-control"
                      name="website"
                      onChange={exchange}
                      defaultValue={seller ? seller.website : null}
                      placeholder="Enter Company Web Site"
                    />
                  </FormGroup>
                </Col>

                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button
                        color="primary"
                        size="lg"
                        onClick={sellerfinal}
                      >
                        Update Seller
                      </Button>
                    </li>
                    <li>
                    <Button
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                    
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div
              className={`tab-pane ${modalTab === "3" ? "active" : ""}`}
              id="address"
            >
              <Row className="gy-4">
                <Col md="12">
                  <FormGroup>
                    <label className="form-label" htmlFor="calle">
                      Street
                    </label>
                    <input
                      type="text"
                      id="calle"
                      name="calle"
                      onChange={exchange}
                      defaultValue={seller ? seller.calle : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="numero">
                      Number
                    </label>
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      onChange={exchange}
                      defaultValue={seller ? seller.numero : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="barrio">
                      District
                    </label>
                    <input
                      type="text"
                      id="barrio"
                      name="barrio"
                      onChange={exchange}
                      defaultValue={seller ? seller.barrio : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="ciudad">
                      City
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      onChange={exchange}
                      defaultValue={seller ? seller.ciudad : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="estado">
                      State
                    </label>
                    <input
                      type="text"
                      id="estado"
                      name="estado"
                      onChange={exchange}
                      defaultValue={seller ? seller.estado : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="pais">
                      Country
                    </label>
                    <RSelect
                      options={countries}
                      placeholder={seller ? seller.pais : null}
                      defaultValue={seller ? seller.pais : null}
                      onChange={changepais}
                      name="pais"
                      //   defaultValue={evento.legaladdress.pais}
                      //   onChange={(e) =>
                      //     setEvento({
                      //       ...evento,
                      //       legaladdress: {
                      //         ...evento.legaladdress,
                      //         pais: e.value,
                      //       },
                      //     })
                      //   }
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <label className="form-label" htmlFor="zip">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      onChange={exchange}
                      defaultValue={seller ? seller.zip : null}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button
                        color="primary"
                        size="lg"
                        onClick={sellerfinal}
                      >
                        Update Seller
                      </Button>
                    </li>
                    <li>
                    <Button
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalSeller;
