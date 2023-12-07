import React, { useState } from "react";
import { AppoinmentList } from "../components/AppoinmentList";
import Doctor from "../components/Doctor";
import { doctorData, appointmentData } from "../helper/data";

const Home = () => {
  const [catchAppoint, setCatchAppoint] = useState(appointmentData);

  const handleRemove = (index) => {
    const updateCath = [...catchAppoint];
    updateCath.splice(index, 1);
    setCatchAppoint(updateCath);
  };

  return (
    <div className="main">
      <h1 className="text-center fw-bold "> European hospital</h1>
      <p className="text-center fw-bold w-50 mx-auto">Our doctors</p>
      <Doctor doctor={doctorData} setCatchAppoint={setCatchAppoint} />
      <div>
        <h1 className="text-center text-white fw-bold">Appointment List</h1>
        {catchAppoint.map((item, index) => (
          <div key={index}>
            <AppoinmentList
              key={index}
              {...item}
              handleRemove={() => handleRemove(index)}
            ></AppoinmentList>
          </div>
        ))}
      </div>
      <div className={catchAppoint.length < 1 ? "appo-bg" : ""}></div>
    </div>
  );
};

export default Home;
