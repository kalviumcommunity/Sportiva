import "./Homepage.css";
export default function Welcome() {
  return (
    <>
      <div className="mainDiv">
        <div className="main">
          <div>
            <h1>SPORTIVA</h1>
            <p className="Note1">Unleash the inner champion</p>
            <p className="Note2">
              The ultimate tool for tracking and achieving your athletic goals!
            </p>
            <button className="startButton">Start Tracking</button>
            <button className="loginButton">Login</button>
          </div>
          <div>
            <img
              src="http://www.worldtaekwondo.org/wp-content/uploads/2018/12/DEM_0046.jpg"
              alt="img"
              height="828px"
              width="1190px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
