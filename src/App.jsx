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
            <spa>Yearly</spa>
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
          <TimeCard
            classname={"play"}
            timeType={"Play"}
            bgImage={play}
            time={36}
            previousTime={38}
          />
          <TimeCard
            classname={"study"}
            timeType={"Study"}
            bgImage={study}
            time={36}
            previousTime={38}
          />
          <TimeCard
            classname={"exercise"}
            timeType={"Exercise"}
            bgImage={exercise}
            time={36}
            previousTime={38}
          />
          <TimeCard
            classname={"social"}
            timeType={"Social"}
            bgImage={social}
            time={36}
            previousTime={38}
          />
          <TimeCard
            classname={"selfCare"}
            timeType={"Self Care"}
            bgImage={selfCare}
            time={36}
            previousTime={38}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
