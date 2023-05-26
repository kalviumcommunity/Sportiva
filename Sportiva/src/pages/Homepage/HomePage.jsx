import "./Homepage.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="main-div">
      <div className="main">
        <div className="left-div">
          <h1>SPORTIVA</h1>
          <p className="Note1">Unleash the inner champion</p>
          <p className="Note2">
            The ultimate tool for tracking and achieving your athletic goals!
          </p>
          <button
            className="start-button"
            onClick={() => {
              loginWithRedirect({});
            }}
          >
            Start Tracking
          </button>
          <button className="login-button" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </div>
        <div className="right-div">
          <img
            className="home-page-img"
            src="/images/Homepageimg.jpg"
            alt="img"
            height="828px"
            width="1190px"
          />
        </div>
      </div>
    </div>
  );
}
