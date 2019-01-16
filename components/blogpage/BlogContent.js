import React from "react";
import * as contentful from "contentful";
import BlogHeader from "./BlogHeader";

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
    this.fetchPosts(this.props.id).then(this.setPosts);
    // .then(response => this.fetchImg(response).then(this.setImg));
  }

  // this.fetchImg(this.state.heroImage).then(this.setImg)
  fetchImg = entry => this.client.getAssets(entry);

  fetchPosts = entry => this.client.getEntries({ "sys.id": entry });

  setImg = response => {
    console.log(response);
  };

  setPosts = response => {
    let assets = response.includes.Asset;
    let heroImg = assets[0];
    heroImg = heroImg.fields.file.url;
    heroImg = "https:" + heroImg + "?w=700&h=700";
    let preFormatBody = response.items[0].fields.body;
    let title = response.items[0].fields.title;
    let author = response.items[0].fields.author;
    author = author.fields.name;
    let description = response.items[0].fields.description;
    let publishDate = response.items[0].fields.publishDate;
    let slug = response.items[0].fields.slug;
    let tags = response.items[0].fields.tags;

    this.setState({
      heroImg: heroImg,
      posts: response.items[0],
      markdown: marked(preFormatBody),
      title: title,
      author: author,
      publishDate: publishDate,
      slug: slug,
      tags: tags
    });
    console.log(assets, "THIS RES");

    // return response.fields.heroImage.sys.id;
  };

  render() {
    return (
      <div>
        <BlogHeader
          title={this.state.title}
          image={this.state.heroImg}
          author={this.state.author}
          description={this.state.description}
          publishDate={this.state.publishDate}
        />
        <div>
          <td dangerouslySetInnerHTML={{ __html: this.state.markdown }} />
        </div>
      </div>
    );
  }
}
