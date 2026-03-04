import {
  exercise,
  play,
  selfCare,
  social,
  study,
  work,
} from "./assets/images/allImages";
import profilePic from "./assets/images/image-jeremy.png";
import TimeCard from "./components/TimeCard";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-container">
          <div className="user-details">
            <img src={profilePic} alt="" />
            <div className="user-info">
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <div className="tabs">
            <span>Daily</span>
            <span>Monthly</span>
            <span>Yearly</span>
          </div>
        </div>
        <div className="right-container">
          <TimeCard
            classname={"work"}
            timeType={"Work"}
            bgImage={work}
            time={36}
            previousTime={38}
          />
          <TimeCard classname={"play"} timeType={"Play"} bgImage={play} />
          <TimeCard classname={"study"} timeType={"Study"} bgImage={study} />
          <TimeCard
            classname={"exercise"}
            timeType={"Exercise"}
            bgImage={exercise}
          />
          <TimeCard classname={"social"} timeType={"Social"} bgImage={social} />
          <TimeCard
            classname={"selfCare"}
            timeType={"Self Care"}
            bgImage={selfCare}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
