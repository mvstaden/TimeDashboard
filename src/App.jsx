import { useState } from "react";
import profilePic from "./assets/images/image-jeremy.png";
import TimeCard from "./components/TimeCard";
import { timeSheet } from "./data";

const App = () => {
  const [tab, setTab] = useState("daily");
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
            <span
            
              onClick={() => setTab("daily")}>
              Daily
            </span>
            <span onClick={() => setTab("weekly")}>Weekly</span>
            <span onClick={() => setTab("monthly")}>Monthly</span>
          </div>
        </div>
        <div className="right-container">
          {timeSheet.map((ts) => (
            <TimeCard key={ts.title} {...ts} tab={tab} />
          ))}
          {/* <TimeCard
            classname={"work"}
            timeType={timeSheet[0].title}
            bgImage={work}
            time={timeSheet[0].timeframes.daily.current}
            previousTime={timeSheet[0].timeframes.daily.previous}
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
          /> */}
        </div>
      </div>

      {/* <div className="test">
        <div className="left">
          <div className="inner1">
            <img src={profilePic} alt="" />
            <div className="c1">
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <div className="tab">
            <span>Daily</span>
            <span>Monthly</span>
            <span>Yearly</span>
          </div>
        </div>
        <div className="right">
          <h1>hello</h1>
        </div>
      </div>*/}
    </div>
  );
};
export default App;
