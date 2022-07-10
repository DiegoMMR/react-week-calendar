import React from "react";
import moment from "moment";
import { hours } from "../../constants/times";

interface IProps {
  day: moment.Moment;
  hourFormat: string;
}

const Day = ({ day, hourFormat }: IProps) => {
  const isToday = moment().isSame(day, "day");

  return (
    <div className="day">
      <div className={`day-title ${isToday ? "today" : ""}`}>
        <span>{day.format("dddd")}</span>
        <div className={`day-number ${isToday ? "today" : ""}`}>
          <span>{day.format("DD")}</span>
        </div>
      </div>
      <div className="day-times">
        {hours.map((hour, index) => (
          <div key={index} className="time-box">
            <div className="hour">{moment(hour, "HH:mm").format(hourFormat)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Day };
