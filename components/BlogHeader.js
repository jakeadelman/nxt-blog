export default props => (
  <div className="content-page-header-row">
    <div className="content-page-header-column">
      <h1 className="content-page-header-title">{props.title}</h1>
    </div>
    <div className="content-page-header-column">
      <img src={props.image} className="content-page-header-image" />
    </div>
  </div>
);
