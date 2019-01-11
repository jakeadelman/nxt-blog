import React from "react";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogMain from "./components/BlogMain";

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <BlogMain />
      </div>
    );
  }
}
