import React from "react";
import { withRouter } from "next/router";
import BlogContent from "../components/BlogContent";
import Layout from "../components/Layout";
import "../fonts.css";

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>this is content</p>
    <p>{props.router.query.id}</p>
    <BlogContent id={props.router.query.id} />
  </div>
));

const BlogPage = props => (
  <Layout>
    <div className="fonty">
      <Content />
    </div>
  </Layout>
);

export default BlogPage;
