import Navbar from "./MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout = props => (
  <div>
    <Navbar />
    <div style={layoutStyle}>{props.children}</div>
  </div>
);

export default Layout;
