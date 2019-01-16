import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";

const PostLink = props => (
  <div>
    <Link href={`/blogpage?title=${props.title}` + `&id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </div>
);

export default class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props) {
      this.setState({
        fields: this.props.post.fields,
        sys: this.props.post.sys
      });
      console.log(this.props);
      if (
        this.props.post.fields.heroImage &&
        this.props.post.fields.heroImage.sys.type == "Asset"
      ) {
        let img =
          "http:" +
          this.props.post.fields.heroImage.fields.file.url +
          "?fit=thumb&f=top_left&h=100&w=100&r=180";
        this.setState({
          img: img
        });
      }
    }
  }

  render() {
    return (
      <Row className="blogrow">
        <h1>{this.props.post.fields.title}</h1>
        <p>{this.props.post.fields.description}</p>
        <div className="blogpage-img">
          {this.state.img ? <img src={this.state.img} /> : null}
        </div>

        <div>
          {this.state.fields ? (
            <PostLink title={this.state.fields.title} id={this.state.sys.id} />
          ) : null}
        </div>
        <style jsx>
          {`
            .blogpage-img {
              float: left;
              margin-right: 1em;
            }
          `}
        </style>
      </Row>
    );
  }
}
