import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default props => (
  <Card className="blog-article-card">
    <CardBody>
      <CardTitle className="home-blog-article-title">
        {props.title} <div className="home-date">- {props.date}</div>
      </CardTitle>

      <CardSubtitle>{props.description}</CardSubtitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
);
