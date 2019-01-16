import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import * as contentful from "contentful";
import React from "react";

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
      <div>
        <p>this is paragraph</p>
      </div>
    );
  }
}
