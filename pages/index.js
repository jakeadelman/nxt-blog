import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React from "react";
// import ScrollReveal from "../components/effects/RevealMe";

import Explain from "../components/index/Explain";
import HomeDiv from "../components/index/HomeDiv";
import MyNavbar from "../components/index/MyNavbar";
import Fonts from "../components/index/Fonts";

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
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
