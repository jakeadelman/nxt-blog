import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import HomeDiv from "./components/HomeDiv";
import Explain from "./components/Explain";

const Index = () => (
  <div>
    <MyNavbar />
    <div id="backgroundimg">
      <div id="main-div">
        <img src="/static/profile8.jpg" alt="profile-pic" id="profile-pic" />
        <Explain />
        <HomeDiv />
      </div>
    </div>
  </div>
);

export default Index;
