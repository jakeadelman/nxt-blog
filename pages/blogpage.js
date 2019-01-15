import React from "react";
import { withRouter } from "next/router";
import BlogContent from "../components/BlogContent";
import Layout from "../components/Layout";
import "../index.css";
import Document, { Head } from "next/document";
import Fonts from "../components/Fonts";
import BlogHeader from "../components/BlogHeader";

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
