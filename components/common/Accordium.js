import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Accordium = ({ heading, text }) => {
  const [showCollups, setShowCollups] = useState(false);

  return (
    <div
      onClick={() => setShowCollups((prev) => !prev)}
      className="accordium-container"
    >
      <button>
        <span>{heading}</span>
        <div className="text-gray-500 pr-5 text-lg">
          {showCollups ? (
            <FontAwesomeIcon icon={faCircleMinus} />
          ) : (
            <FontAwesomeIcon icon={faCirclePlus} />
          )}
        </div>
      </button>
      <p className={`collaps-item ${showCollups ? "block" : "hidden"}`}>
        {text}
      </p>
    </div>
  );
};

export default Accordium;
