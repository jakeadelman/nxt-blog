import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default props => (
  <div style={{ marginTop: "1em" }}>
    <Card>
      <CardBody>
        <CardTitle style={{ display: "flex" }}>
          <div
            style={{
              textAlign: "center",
              margin: "auto",
              fontWeight: 700,
              fontSize: "1em"
            }}
          >
            My Stack
          </div>
        </CardTitle>

        <CardText>
          <div style={{ display: "flex", "margin-top": "1em" }}>
            <div className="pointdivs">
              <ul>
                <li className="list-header">Languages:</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="pointdivs">
              <ul>
                <li className="list-header">DevOps:</li>
                <li>Serverless</li>
                <li>AWS</li>
                <li>bash shell, linux</li>
              </ul>
            </div>

            <div className="pointdivs">
              <ul>
                <li className="list-header">Libraries:</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Expressjs</li>
                <li>Graphql (Apollo)</li>
                <li>more..</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "2em" }}>
            <button
              style={{
                margin: "auto",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#2ac9e1"
              }}
            >
              <a href="/resume">View Resume</a>
            </button>
          </div>
          <div style={{ marginTop: "2em", display: "flex" }}>
            <div style={{ margin: "auto", display: "flex" }}>
              <div style={{ marginRight: "10px" }}>get in touch: </div>
              <div style={{ fontWeight: 700 }}>jacobzadelman@gmail.com</div>
            </div>
          </div>
        </CardText>
      </CardBody>
    </Card>
    <style jsx>
      {`
        .buttons {
          margin: 20px;
        }
        .button-div {
          display: flex;
        }
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
        li {
          font-weight: 300;
          font-size: 1em;
        }
      `}
    </style>
  </div>
);
