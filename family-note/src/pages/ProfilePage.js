import React from "react";
import { ScheduleComponent, Day, Week, Inject } from "@syncfusion/ej2-react-schedule";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-schedule/styles/material.css";
import TaskList from "../components/TaskList";
const ProfilePage = () => {
  const user = {
    name: "John Doe",
    avatar: "https://danviet.mediacdn.vn/zoom/700_438/296231569849192448/2021/8/8/thien-an-14-16284301808641112842162-0-0-438-700-crop-1628430344637448733787.jpg", // Ảnh đại diện
    coverPhoto: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/02/4901989_firefly_1.jpg", // Ảnh bìa
  };
  const tasks = [
    {
      id: 1,
      name: "Nhiệm vụ 1",
      description: "Mô tả nhiệm vụ 1",
      dueDate: "2025-01-15",
      status: "1",
    },
    {
      id: 2,
      name: "Nhiệm vụ 2",
      description: "Mô tả nhiệm vụ 2",
      dueDate: "2025-01-05",
      status: "1",
    },
    {
      id: 3,
      name: "Nhiệm vụ 3",
      description: "Mô tả nhiệm vụ 3",
      dueDate: "2025-01-12",
      status: "0",
    },
  ];

  const events = [
    {
      Id: 1,
      Subject: "Team Meeting",
      StartTime: new Date(2025, 0, 10, 10, 0),
      EndTime: new Date(2025, 0, 10, 11, 0),
    },
    {
      Id: 2,
      Subject: "Project Deadline",
      StartTime: new Date(2025, 0, 12, 15, 0),
      EndTime: new Date(2025, 0, 12, 17, 0),
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Cover Photo */}
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${user.coverPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "20px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid white",
          }}
        >
          <img
            src={user.avatar}
            alt="Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* User Info */}
      <div style={{ padding: "70px 20px 20px", textAlign: "left" }}>
        <h2 style={{ margin: "0 0 10px" }}>{user.name}</h2>
      </div>
      <div className="container mx-auto p-4">
      <TaskList tasks={tasks} />
    </div>

      {/* Schedule Component */}
      <div style={{ padding: "20px" }}>
        <ScheduleComponent
          eventSettings={{ dataSource: events }}
          selectedDate={new Date(2025, 0, 7)}
          disabled={true}
          views={['Day', 'Week']} 

        >
          <Inject services={[Day, Week]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default ProfilePage;
