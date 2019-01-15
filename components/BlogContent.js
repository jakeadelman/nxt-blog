import React from "react";
import * as contentful from "contentful";

// const rtfm = require("@contentful/rich-text-from-markdown");
const marked = require("marked");

export default class BlogContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  client = contentful.createClient({
    space: "mtpe83yxj293",
    accessToken:
      "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
  });

  componentDidMount() {
    this.fetchPosts(this.props.id)
      .then(this.setPosts)
      .then(this.fetchImg().then(res => console.log(res)));
  }

  fetchImg = entry => this.client.getAssets(entry);
  fetchPosts = entry => this.client.getEntry(entry);

  setPosts = response => {
    let res = response.fields;
    res = res.body;
    this.setState({
      posts: response,
      markdown: marked(res)
    });
    console.log(this.state.posts.fields.heroImage.sys.id);
  };

  render() {
    return <td dangerouslySetInnerHTML={{ __html: this.state.markdown }} />;
  }
}
