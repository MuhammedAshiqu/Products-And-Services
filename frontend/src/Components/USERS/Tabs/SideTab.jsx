import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Myorders from "../Myorders/Myorders";
import "./sidetab.scss";
const Sidetab = ({ nwUser }) => {
  const [key, setKey] = useState("home");
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex justify-content-center"
    >
      {/* <Tab
        style={{ width: "100%" }}
        className="bg-light"
        eventKey="profile"
        title="Profile"
      > */}
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />

            <h2>PROFILE</h2>
          <div class="profile">
            <div class="profile-pic">
              <div class="header-color"></div>
              <img
                src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/profile-pic.jpg"
                alt="Profile Picture"
              />
            </div>
            <div class="profile_title">
              <h2>
                Name:<i>{nwUser && nwUser.Name}</i>
              </h2>
              <br />
              <h4>
                Email:<i>{nwUser && nwUser.Email}</i>
              </h4>
              <br />
              <h4>
                Phone Number:<i>{nwUser && nwUser.Phone}</i>
              </h4>
              <br />
              <h4>
                Address:<i>{nwUser && nwUser.Address}</i>
              </h4>
              <br />
            </div>
          </div>
        </div>
      {/* </Tab> */}
{/* 
      <Tab
        style={{ width: "100%" }}
        className="bg-light"
        eventKey="order"
        title="My Orders"
      > */}
        <div><br/>
          <h2>My Orders</h2>
          <Myorders />
        </div>
      {/* </Tab> */}
    </Tabs>
  );
};

export default Sidetab;
