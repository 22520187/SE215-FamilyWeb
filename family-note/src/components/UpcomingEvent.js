import React from "react";

const UpcomingEvent = ({ title, startTime, endTime }) => {
  return (
    <div
      style={{
        backgroundColor: "#E5F1FF",
        borderLeft: "5px solid #3A73FF",
        borderRadius: "10px",
        padding: "10px 15px",
        marginBottom: "15px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h4 style={{ color: "#3A73FF", margin: "0 0 5px 0" }}><b>{title}</b></h4>
      <p style={{ color: "#3A73FF", fontSize: "14px", margin: "0" }}>
        {new Date(startTime).toLocaleString()} - {new Date(endTime).toLocaleString()}
      </p>
    </div>
  );
};

export default UpcomingEvent;
