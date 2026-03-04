import "./timeCard.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";

const TimeCard = ({ classname, timeType, bgImage, time, previousTime }) => {
  return (
    <div className={`card ${classname}`}>
      <img src={bgImage} alt="" className="bgImage" />
      <div className="card-details">
        <div className="details-top">
          <p>{timeType}</p>
          <img src={ellipsis} alt="" />
        </div>
        <div className="details-time">
          <h2>{time}hrs</h2>
          <p>Last Week - {previousTime}hrs</p>
        </div>
      </div>
    </div>
  );
};
export default TimeCard;
