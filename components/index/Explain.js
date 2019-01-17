import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default () => (
  <div id="explain">
    <Card>
      <CardBody id="inside-explain">
        <CardText id="text-explain">
          <p id="paragraph-explain">
            Hi! My name is Jake Adelman. I build products people love.
          </p>
        </CardText>
      </CardBody>
    </Card>
    <style jsx>
      {`
        #paragraph-explain {
          font-weight: 600;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);
