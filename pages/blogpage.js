import React from "react";
import { withRouter } from "next/router";
import BlogContent from "../components/blogpage/BlogContent";
import Layout from "../components/layouts/BlogPage";
import "../index.css";

const Content = withRouter(props => (
  <div>
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
