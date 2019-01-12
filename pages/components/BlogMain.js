import React from "react";
import { Container, Row, Col, Media } from "reactstrap";

export default class BlogMain extends React.Component {
  render() {
    return (
      <Container id="blog-content-container">
        <Row>
          <Col xs="auto">
            <p>Title</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
