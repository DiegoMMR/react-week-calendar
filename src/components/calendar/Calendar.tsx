import React, { useState, useEffect } from "react";
import { IConfig } from "../../interfaces/config";
import moment from "moment";
import "../../sass/Calendar.scss";

import { Header } from "./Header";
import { Day } from "./Day";

const Calendar = () => {
  let [firstDay, setFirstDay] = useState(moment().startOf("week"));
  const [days, setDays] = useState<moment.Moment[]>([]);
  const [config, setConfig] = useState<IConfig>({ hourFormat: "h:mm a", startOfWeek: "monday" });

  useEffect(() => {
    const newWeek = [];
    for (let i = 0; i < 7; i++) {
      newWeek.push(firstDay.clone().add(i, "days"));
    }

    setDays(newWeek);
  }, [firstDay]);

  const nextWeekClick = () => {
    setFirstDay(firstDay.clone().add(7, "days"));
  };

  const prevWeekClick = () => {
    setFirstDay(firstDay.clone().subtract(7, "days"));
  };

  const thisWeekClick = () => {
    setFirstDay(moment().startOf("week"));
  };

  return (
    <div className="calendar-container">
      {days.length > 0 && (
        <Header
          days={days}
          config={config}
          setConfig={setConfig}
          nextWeekClick={nextWeekClick}
          prevWeekClick={prevWeekClick}
          thisWeekClick={thisWeekClick}
        />
      )}

      <div className="days-container">
        {days.map((day, index) => (
          <Day key={index} day={day} hourFormat={config.hourFormat} />
        ))}
      </div>
    </div>
  );
};

export { Calendar };
