import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <embed src="/static/res.pdf" width="800px" height="1000px" />
        </div>
        <div>
          <button
            style={{
              margin: "auto",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#2ac9e1"
            }}
          >
            <a href="/">back</a>
          </button>
        </div>
      </div>
    );
  }
}
