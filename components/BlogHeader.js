let dateFormat = require("dateformat");

export default props => (
  <div className="content-page-header-row">
    <div className="content-page-header-column">
      <div className="content-page-header-title-background">
        <h1 className="content-page-header-title">{props.title}</h1>
        <p className="content-page-header-author">
          {props.author}, {dateFormat(props.publishDate, "fullDate")}
        </p>
      </div>
    </div>
    <div className="content-page-header-column">
      <img src={props.image} className="content-page-header-image" />
    </div>
  </div>
);
