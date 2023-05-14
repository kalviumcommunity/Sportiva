import "./Homepage.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const {loginWithRedirect} = useAuth0()
  return (
    <div className="main-div">
      <div className="main">
        <div className="left-div">
          <h1>SPORTIVA</h1>
          <p className="Note1">Unleash the inner champion</p>
          <p className="Note2">
            The ultimate tool for tracking and achieving your athletic goals!
          </p>
          <Link to="/students-listing">
            <button className="start-button">Start Tracking</button>
          </Link>
          <button className="login-button" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </div>
        <div className="right-div">
          <img
            className="home-page-img"
            src="http://www.worldtaekwondo.org/wp-content/uploads/2018/12/DEM_0046.jpg"
            alt="img"
            height="828px"
            width="1190px"
          />
        </div>
      </div>
    </div>
  );
}
