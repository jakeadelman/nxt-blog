import Navbar from "./MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fonts from "./Fonts";

const layoutStyle = {
  margin: 20,
  padding: 20
};

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div style={layoutStyle}>{this.props.children}</div>
      </div>
    );
  }
}
