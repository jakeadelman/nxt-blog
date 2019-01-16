import React from "react";
import MyNavbar from "../components/index/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import * as contentful from "contentful";
import BlogItem from "../components/blog/BlogItem";

export default class Blog extends React.Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: "mtpe83yxj293",
    accessToken:
      "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    return (
      <div>
        <MyNavbar />
        <br />
        {this.state.posts.map((each, i) => (
          <BlogItem post={each} key={i} />
        ))}
      </div>
    );
  }
}
