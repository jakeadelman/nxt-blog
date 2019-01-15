import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React from "react";

import Explain from "../components/Explain";
import HomeDiv from "../components/HomeDiv";
import MyNavbar from "../components/MyNavbar";
import Fonts from "../components/Fonts";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div id="backgroundimg">
          <div id="main-div">
            <img
              src="/static/profile8.jpg"
              alt="profile-pic"
              id="profile-pic"
            />
            <Explain />
            <HomeDiv />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
