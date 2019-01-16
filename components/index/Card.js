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
  <div>
    <Card>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText>{props.text}</CardText>
        <Button>button</Button>
      </CardBody>
    </Card>
  </div>
);
