import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React from "react";
import Layout from "../components/layouts/HomePage";
import Projects from "../components/Projects";

import Explain from "../components/index/Explain";
import HomeDiv from "../components/index/HomeDiv";
import MyNavbar from "../components/index/MyNavbar";
import Fonts from "../components/index/Fonts";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";
import MyStack from "../components/MyStack";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div id="backgroundimg">
          <MyNavbar className="navbar" />
          <div id="main-div">
            <div className="inside-main-div">
              <Flip left>
                <Explain />
              </Flip>
              <Flip left>
                <Projects />
              </Flip>
              <Flip left>
                <MyStack />
              </Flip>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
