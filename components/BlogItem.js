import React from "react";
// import { Router } from "../../routes";
// import { Link } from "../../routes";
import Link from "next/link";

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
      console.log(this.props.post.fields.title);
    }
  }

  render() {
    if (this.state) {
      console.log(this.state.fields);
    }
    return (
      <div className="box content">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>

        <div>
          {this.state.fields ? (
            <PostLink title={this.state.fields.title} id={this.state.sys.id} />
          ) : null}
        </div>
      </div>
    );
  }
}
