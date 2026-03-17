import "./timeCard.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";

const TimeCard = ({ title, timeframes, image, tab, classname }) => {
  return (
    <div className={`card ${classname} `}>
      <img src={image} alt="" className="bgImage" />
      <div className="card-details">
        <div className="details-top">
          <p>{title}</p>
          <img src={ellipsis} alt="" />
        </div>
        <div className="details-time">
          <h2>{timeframes[tab].current}hrs</h2>
          <p>
            {tab === "daily"
              ? "Yesterday"
              : tab === "weekly"
                ? "Last week"
                : "Last Month"}
            - {timeframes[tab].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};
export default TimeCard;
