import Navbar from "../index/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fonts from "../index/Fonts";
import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20
};

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          a {
            color: #000000;
            font-weight: 600;
          }
          a:hover {
            color: #808080;
          }
        `}</style>
        <Navbar />
        <div className="fonto">{this.props.children}</div>
        <style jsx>
          {`
            .fonto {
              padding: 20px;
              margin: auto;
              max-width: 50vw;
            }
          `}
        </style>
      </div>
    );
  }
}

// style={layoutStyle}
