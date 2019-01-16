import { Container, Row, Col } from "reactstrap";
import Card from "./Card";

export default () => (
  <Container>
    <Row id="containing-row">
      <Col xs="auto">
        <Card title="Projects" subtitle="my projects" text="the text" />
      </Col>
      <Col xs="auto">
        <Card title="Projects" subtitle="my projects" text="the text" />
      </Col>
      <Col xs="auto">
        <Card title="Projects" subtitle="my projects" text="the text" />
      </Col>
    </Row>
  </Container>
);
