import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

const Img = props => (
  <Col className="img-col">
    <div className="blogpage-img">
      <img src={props.img} />
    </div>
    <style jsx>
      {`
        .blogpage-img {
          max-width: 10%;
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </Col>
);

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
      <Container className="blog-row-div">
        <Row className="blogrow">
          {this.state.img ? (
            <Img img={this.state.img} className="blog-col-img" />
          ) : null}
          <Col className="blogcol">
            <h1>{this.props.post.fields.title}</h1>
          </Col>

          <style jsx>
            {`
              .blogpage-img {
                float: left;
                margin-right: 1em;
              }
              .blog-col-img {
                max-width: 20%;
              }
            `}
          </style>
        </Row>
        <Row className="desc-row">
          <p>{this.props.post.fields.description}</p>
        </Row>
      </Container>
    );
  }
}

// <div>
//             {this.state.fields ? (
//               <PostLink
//                 title={this.state.fields.title}
//                 id={this.state.sys.id}
//               />
//             ) : null}
//           </div>
