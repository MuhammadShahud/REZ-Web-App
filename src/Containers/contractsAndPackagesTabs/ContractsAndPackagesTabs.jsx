import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

import "../scheduleTabs/Schedule.css";
import { Button, MemberShipCard } from "../../Components";
import { Col, Row } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ContractsAndPackagesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();

  return (
    <Box sx={{ width: "100%" }} className="schedule__tab__wrapper">
      <div className="sehedule__tabs__wrapper">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Contracts" {...a11yProps(0)} />
            <Tab label="Packages" {...a11yProps(1)} />
            <Tab label="passes" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>

      <TabPanel
        className="schedule__tab__content w-100"
        value={value}
        index={0}
      >
        <ContractWrapper />
        <div className="d-flex justify-content-center">
          <Button
            text="ADD NEW CONTRACT"
            style={{ padding: "0 10px", width: "auto" }}
            onClick={() => history.push("/createcontract")}
          />
        </div>
      </TabPanel>
      <TabPanel
        className="schedule__tab__content w-100 "
        value={value}
        index={1}
      >
        <PackageWrapper />
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => history.push("/createpackage")}
            text="ADD NEW PACKAGE"
          />
        </div>
      </TabPanel>
      <TabPanel
        className="schedule__tab__content w-100 "
        value={value}
        index={2}
      >
        <PassesWraper />
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => history.push("/createpass")}
            text="ADD NEW PASS"
          />
        </div>
      </TabPanel>
    </Box>
  );
}

const ContractWrapper = () => {
  return (
    <Row className="d-flex justify-content-center my-3">
      <Col md={4}>
        <MemberShipCard>
          <div>
            <h6>Economical</h6>
            <h3>CONTRACT</h3>
          </div>
          <h1 className="gradient__text">$50</h1>
          <ul>
            <li>Validity: 2 Weeks</li>
            <li>Event Passes: 04</li>
            <li>Training Passes: 05</li>
            <li>Renewable: Yes</li>
          </ul>
          <Button text="BUY NOW" />
        </MemberShipCard>
      </Col>
      <Col md={4}>
        <MemberShipCard>
          <div>
            <h6>Economical</h6>
            <h3>CONTRACT</h3>
          </div>
          <h1 className="gradient__text">$150</h1>
          <ul>
            <li>Validity: 2 Weeks</li>
            <li>Event Passes: 04</li>
            <li>Training Passes: 05</li>
            <li>Renewable: Yes</li>
          </ul>
          <Button text="BUY NOW" />
        </MemberShipCard>
      </Col>
    </Row>
  );
};

const PackageWrapper = () => {
  return (
    <Row className="d-flex justify-content-center my-3">
      <Col md={4}>
        <MemberShipCard>
          <div>
            <h6>Economical</h6>
            <h3>PACKAGE</h3>
          </div>
          <h1 className="gradient__text">$50</h1>
          <ul>
            <li>Validity: 2 Weeks</li>
            <li>Event Passes: 04</li>
            <li>Training Passes: 05</li>
          </ul>
        </MemberShipCard>
      </Col>
      <Col md={4}>
        <MemberShipCard>
          <div>
            <h6>Economical</h6>
            <h3>PACKAGE</h3>
          </div>
          <h1 className="gradient__text">$150</h1>
          <ul>
            <li>Validity: 2 Weeks</li>
            <li>Event Passes: 04</li>
            <li>Training Passes: 05</li>
          </ul>
        </MemberShipCard>
      </Col>
    </Row>
  );
};

const PassesWraper = () => {
  return (
    <Row className="d-flex justify-content-center my-3">
      <Col md={4}>
        <MemberShipCard>
          <div>
            <h3>CLINIC PASS</h3>
          </div>
          <h1 className="gradient__text">$50</h1>
          <ul>
            <li>Get 5 Visits In One Pass</li>
          </ul>
        </MemberShipCard>
      </Col>
      <Col md={4}>
      <MemberShipCard>
          <div>
            <h3>CLINIC PASS</h3>
          </div>
          <h1 className="gradient__text">$50</h1>
          <ul>
            <li>Get 5 Visits In One Pass</li>
          </ul>
        </MemberShipCard>
      </Col>
    </Row>
  );
};
