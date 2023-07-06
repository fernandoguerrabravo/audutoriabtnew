/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CardTitle } from "reactstrap";
import {
  Icon,
  TooltipComponent,
  PreviewAltCard,
  Button,
} from "../../components/Component";
import { Timeline, TimelineEvent, TimelineBlip } from "react-event-timeline";

import { fromUnixTime } from "date-fns";

const Sellerstep = ({ seller, setseller }) => {
  const [s1, sets1] = useState([]);
  const [s2, sets2] = useState([]);
  const [s3, sets3] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalTab, setModalTab] = useState("1");

  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        <CardTitle>
          <h5 className="title text-primary">Metodology Road to Success</h5>
        </CardTitle>

        <div className="card-tools text-secondary">
          <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="top"
            id="tooltip_step"
            text="Step to Step to Success"
          />{" "}
        </div>
      </div>
      <hr></hr>

      <Timeline>
        <TimelineEvent
          title={
            <strong>Stage 1: Initial Diagnostic, Preliminary Assessment</strong>
          }
          createdAt=""
          icon={<Icon className="sucess" name="circle-fill"></Icon>}
          iconColor="#5cb85c"
          container="card"
        >
          <strong>
            <span className="title text-muted">
              Determination of the regulatory requirements that allow the
              company to import its products to the US market. <p></p>
              Requeriments:
              <hr></hr>
              <ul>
                <li>- Commercial Data Sheets</li>
                <li>- Non Commercial Data Sheets</li>

                <li>
                  - Other Registers or Certifications(ex. FDA, USDA, and
                  others).
                </li>
              </ul>{" "}
              <p></p>
              {/* <ul>
                <li> Cost: USD$350 for each category (Frequency: On-Time)</li>
              </ul> */}
            </span>
          </strong>
        </TimelineEvent>
        {/* {s1.length > 0 ? (
          s1.map((resp) => ( */}
        {/* // <div key={resp._id.$oid}> */}
        {/*  <TimelineEvent
                title={<strong>{resp["name"]}</strong>}
                createdAt={resp["created"]}
                icon={<Icon name="check-thick"></Icon>}
                iconColor={resp.finish ? "#5cb85c" : "#f0ad4e"}
              >
                <strong
                  className={resp.finish ? `text-succes` : `text-warning`}
                >
                  {resp.service_track}{" "}
                </strong>
        </TimelineEvent> */}
        {/* // </div>
          ))
        ) : ( */}
        <div></div>

        <TimelineEvent
          title={<strong>Stage 2: Preparing the Seller</strong>}
          icon={<Icon className="sucess" name="circle-fill"></Icon>}
          iconColor="#5cb85c"
          container="card"
        >
          <strong>
            <span className="title text-muted">
              <ul>
                <li>
                  {" "}
                  - Registration of the foreign Seller as a Foreign Importer of
                  Record (FIOR) for the Seller to to act as Importer in US.
                </li>
                <li> - Registration with Local Customs Broker.</li>
                <li> - Registration with US Customs Broker.</li>
                <li>- Support to the Seller in export/import management</li>
                <li>- Issuance of a Bond before U.S. Customs.</li>
                <li>- Other Registers (ex. FDA, USDA, and others).</li>
              </ul>
              <p></p>
              Requeriments:
              <hr></hr>
              <ul>
                <li>- Legal Documents</li>
                <li>- Passport Legal Represenative</li>

                <li>- Other Legal Documents</li>
              </ul>{" "}
              <p></p>
              {/* <ul>
                <li> Cost: FIOR USD$230 (Frequency: On-Time)</li>
                <li> Cost BOND USD$350 (Frequency: Annual)</li>
                <li> Cost Local Customs Broker USD$150 (Frequency: On-Time)</li>
                <li> Cost US Customs Broker USD$150 (Frequency: On-Time)</li>
              </ul> */}
            </span>
          </strong>
        </TimelineEvent>

        <TimelineEvent
          title={<strong>Stage 3: Preparing the Product</strong>}
          createdAt=""
          icon={<Icon className="sucess" name="circle-fill"></Icon>}
          iconColor="#5cb85c"
          container="card"
        >
          <strong>
            <span className="title text-muted">
              <ul>
                <li>
                  {" "}
                  - Supports in obtaining the regulations that apply to Seller's
                  products in the U.S.A.
                </li>
                <li>
                  {" "}
                  - Provides tariff classification (HTS) of Seller's products.
                </li>
                <li>
                  - Provides certifications issued by Global Selling Accelerator
                </li>
                <li>
                  - Coordinates certifiers/laboratories for more specialized
                  certifications
                </li>
                <li>- Provides label inspection and other special services.</li>
              </ul>
          
          <p></p>
              Requeriments:
              <hr></hr>
              <ul>
                <li>- Certifications</li>
                <li>- Label Test</li>
                <li>- Product Documentation</li>
                <li>- Factory Registration and Documentation</li>
                <li>- Other Products or Factory Documents</li>
              </ul>{" "}  </span>
          </strong>
        </TimelineEvent>

        <TimelineEvent
          title={<strong>Stage 4: Preparing the Shipment</strong>}
          createdAt=""
          icon={<Icon className="sucess" name="circle-fill"></Icon>}
          iconColor="#5cb85c"
          container="card"
        >
           <strong>
            <span className="title text-muted">
              <ul>
              <li>- Advisor in the preparation of shipping documents.</li>
              <li>- Advises on Customs documentation required to cross the border.</li>
              <li>- Coordinates customs process with both Customs Brokers (MEX-USA)</li>
              <li>- Supports in the preparation of pallets</li>
              <li>- Coordinates shipment pick up at Seller's warehouse in Mexico. </li>
              </ul><p></p>
              Requeriments: 
              <hr></hr>
            </span>
          </strong>

          </TimelineEvent>
          <TimelineEvent
          title={<strong>Stage 5: Executing the Shipment</strong>}
          createdAt=""
          icon={<Icon className="sucess" name="circle-fill"></Icon>}
          iconColor="#5cb85c"
          container="card"
        >
           <strong>
            <span className="title text-muted">
              <ul>
             <li>- Coordinates Seller's warehouse transportation to US</li> 
             <li>- Ensures customs clearance of shipment at the border.</li> 
             <li>- Monitors border crossing of shipment.</li>
             <li>- Coordinates shipment pick up in Origin</li>
             <li>- Cordinates shipment delivery to Amazon's Logistics in USA</li>
              </ul>
             <p></p>
              Requeriments: 
              <hr></hr>
        </span>   </strong>
          </TimelineEvent>
      </Timeline>
      
    </React.Fragment>
  );
};
export default Sellerstep;
