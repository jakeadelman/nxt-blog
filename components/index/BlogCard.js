import * as contentful from "contentful";
import React from "react";
import BlogArticleCard from "./BlogArticleCard";
const formatDate = require("dateformat");

// const BlogCard = props => (
//   <div id="explain">
//     <Card>
//       <CardBody id="inside-explain">
//         <CardText>
//           <p>From the Blog</p>
//         </CardText>
//       </CardBody>
//     </Card>
//   </div>
// );

export default class extends React.Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: "mtpe83yxj293",
    accessToken:
      "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
  });

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
    console.log(response);
    return response.items;
  };

  componentDidMount() {
    this.fetchPosts()
      .then(this.setPosts)
      .then(res => console.log(res, "THIS IN CDM"));
  }

  render() {
    return (
      <div className="blog-cards-homepage">
        <h1 className="home-blog-title">from the blog..</h1>
        {this.state.posts.map((each, i) => (
          <BlogArticleCard
            title={each.fields.title}
            description={each.fields.description}
            id={each.sys.id}
            date={formatDate(each.fields.publishDate, "mediumDate")}
            key={i}
          />
        ))}
      </div>
    );
  }
}
