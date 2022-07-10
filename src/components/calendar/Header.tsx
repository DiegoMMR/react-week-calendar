import React, { useState } from "react";
import { ConfigModal } from "./ConfigModal";
import { IConfig } from "../../interfaces/config";
import moment from "moment";
import Gear from "../../assets/gear.png";

interface IProps {
  days: moment.Moment[];
  config: IConfig;
  setConfig: (config: IConfig) => void;
  nextWeekClick: () => void;
  prevWeekClick: () => void;
  thisWeekClick: () => void;
}

const Header = ({ days, config, setConfig, nextWeekClick, prevWeekClick, thisWeekClick }: IProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getTitle = (): string => {
    const month = days[0].format("MMMM YYYY");
    const week = days[0].week();

    return `Week #${week} - ${month}`;
  };

  return (
    <div className="header">
      <div className="arrow-btn" onClick={prevWeekClick}>
        <div className="arrow left" />
      </div>
      <span className="today-btn" onClick={thisWeekClick}>
        Today
      </span>
      <div className="arrow-btn" onClick={nextWeekClick}>
        <div className="arrow right" />
      </div>
      <span className="title">{getTitle()}</span>
      <div className="settings-btn" onClick={toggleModal}>
        <img src={Gear} alt="Settings" />
      </div>
      <ConfigModal config={config} setConfig={setConfig} showModal={showModal} toggleModal={toggleModal} />
    </div>
  );
};

export { Header };
