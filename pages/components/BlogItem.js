import React from "react";

export default class BlogItem extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props.slug, "THIS SLUG");
  }

  render() {
    return (
      <div className="box content">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
