import React from "react";
import { IConfig } from "../../interfaces/config";
import { Modal } from "../Modal/Modal";
import "../../sass/Form.scss";

interface IProps {
  config: IConfig;
  setConfig: (config: IConfig) => void;
  showModal: boolean;
  toggleModal: () => void;
}

const ConfigModal = ({ config, setConfig, showModal, toggleModal }: IProps) => {
  const hourFormats = [
    { label: "12 hour", value: "h:mm a" },
    { label: "24 hour", value: "HH:mm" },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const newConfig: IConfig = { ...config, hourFormat: value };
    toggleModal();
    setConfig(newConfig);
  };

  return (
    <Modal show={showModal} closeCallback={toggleModal}>
      <div className="form">
        <div className="form-item">
          <label>Hour Format</label>
          <select value={config.hourFormat} onChange={handleSelectChange}>
            {hourFormats.map((hourFormat, index) => (
              <option key={index} value={hourFormat.value}>
                {hourFormat.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Modal>
  );
};

export { ConfigModal };
