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
        <CardTitle style={{ display: "flex" }}>
          <div>Project: SocialSlant.io</div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: 0
            }}
            className="linky-div"
          >
            <a className="linky" href="https://socialslant.io/login">
              https://socialslant.io
            </a>
          </div>
        </CardTitle>
        <div className="giffy">
          <img src="/static/croppy.gif" className="imaa" />
        </div>

        <CardText>
          <div
            style={{
              display: "block",
              margin: "auto",
              marginTop: "2.5em"
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "0.8em",
                color: "#808080"
              }}
            >
              test credentials:
            </div>
            <div
              style={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "0.8em",
                color: "#808080"
              }}
            >
              email=jacobzadelman@gmail.com
            </div>
            <div
              style={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "0.8em",
                color: "#808080"
              }}
            >
              pass=jakeadelman
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.4em" }}>
            Technologies used in this project
          </div>
          <div style={{ display: "flex", marginTop: "1em" }}>
            <div className="pointdivs">
              <ul>
                <li className="list-header">Frontend:</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Nextjs</li>
              </ul>
            </div>
            <div className="pointdivs">
              <ul>
                <li className="list-header">Backend:</li>
                <li>Typescript</li>
                <li>Graphql (Apollo)</li>
                <li>Typeorm</li>
                <li>Python</li>
              </ul>
            </div>
          </div>

          <div className="button-div" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <button
                style={{
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#2ac9e1"
                }}
              >
                <a href="https://socialslant.io/login">Go to site</a>
              </button>
            </div>

            <div style={{ margin: "auto" }}>
              <button
                style={{
                  margin: "auto",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#2ac9e1"
                }}
              >
                <a href="https://github.com/jakeadelman/react-apollo-sentiment">
                  Frontend Code
                </a>
              </button>
            </div>
            <div style={{ margin: "auto" }}>
              <button
                style={{
                  margin: "auto",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#2ac9e1"
                }}
              >
                <a href="https://github.com/jakeadelman/type-graphql-server">
                  Backend Code
                </a>
              </button>
            </div>
          </div>
        </CardText>
      </CardBody>
    </Card>
    <style jsx>
      {`
        .giffy {
          max-width: 100%;
        }
        .imaa {
          max-width: 100%;
          height: auto;
        }
        .pointdivs {
          margin: auto;
          text-align: center;
        }
        li {
          list-style-type: none;
        }
        .list-header {
          font-weight: 600;
          text-decoration: underline;
        }
        .linky {
          font-weight: 400;
          color: blue;
        }
        .linky:hover {
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
        .linky-div {
          color: #808080;
        }
        .linky-div:hover {
          color: blue;
          text-decoration: underline;
        }
      `}
    </style>
  </div>
);
