import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Link from "next/link";

const PostLink = props => (
  <div>
    <Link href={`/blogpage?title=${props.title}` + `&id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </div>
);

export default props => (
  <Card className="blog-article-card">
    <CardBody>
      <CardTitle className="home-blog-article-title">
        <Link href={`/blogpage?title=${props.title}` + `&id=${props.id}`}>
          {props.title}
        </Link>

        <div className="home-date">- {props.date}</div>
      </CardTitle>

      <CardSubtitle>{props.description}</CardSubtitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
);
