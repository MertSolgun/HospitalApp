import React from "react";
import { useState } from "react";

export const AppoinmentList = ({
  patient,
  doctor,
  day,
  consulted,
  handleRemove,
}) => {
  const [con, setCon] = useState(consulted);
  const handleCons = () => {
    setCon(!con);
  };

  return (
    <div className="appo-info">
      <div className="appo-details" onClick={handleCons}>
        <div>
          <h5 className="patientname">{patient}</h5>
          <h4 className="doctorname">{doctor}</h4>
        </div>
        <div className="day-time">
          <div>{day.toLocaleDateString()}</div>
          <div>{day.toLocaleTimeString()}</div>

          {con && <div className="consulted">consulted</div>}
        </div>
        <div>
          <svg
            stroke="currentColor"
            onClick={handleRemove}
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-danger fs-1 remove"
            type="button"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
