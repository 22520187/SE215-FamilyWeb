import React, { useRef, useState } from "react";
import { Day, WorkWeek, Week, ScheduleComponent, Inject } from "@syncfusion/ej2-react-schedule";
import { Button ,Typography , Select , theme} from "antd";
import UpcomingEvent from "../components/UpcomingEvent"
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-schedule/styles/material.css";
import "antd/dist/reset.css"; // Import Ant Design styles
const { Option } = Select;
const { Title } = Typography;
const CalendarPage = () => {
  const scheduleRef = useRef(null);
  const [viewMode, setViewMode] = useState("personal"); // personal, family, member
  const [selectedMember, setSelectedMember] = useState(null); // Member ID
  const [events, setEvents] = useState([
    { Id: 1, Subject: "Meeting", StartTime: new Date(2025, 0, 7, 9, 0), EndTime: new Date(2025, 0, 7, 10, 0), Member: "user1" },
    // { Id: 2, Subject: "Conference", StartTime: new Date(2025, 0, 8, 13, 0), EndTime: new Date(2025, 0, 8, 14, 0), Member: "user2" },
    // { Id: 3, Subject: "Family Dinner", StartTime: new Date(2025, 0, 10, 18, 0), EndTime: new Date(2025, 0, 10, 20, 0), Member: "family" }
  ]);

  const members = [
    { id: "user1", name: "Alice" },
    { id: "user2", name: "Bob" },
    { id: "user3", name: "Charlie" }
  ];
  const ucEvents = [
    {
      id: 1,
      title: "Meeting with Team",
      startTime: new Date(2025, 0, 10, 10, 0),
      endTime: new Date(2025, 0, 10, 11, 0),
    },
    {
      id: 2,
      title: "Family Dinner",
      startTime: new Date(2025, 0, 12, 19, 0),
      endTime: new Date(2025, 0, 12, 21, 0),
    },
  ];
  
  
  // Lọc sự kiện theo chế độ xem
  const filteredEvents = events.filter((event) => {
    if (viewMode === "personal") return event.Member === "user1"; // Giả định user1 là người dùng hiện tại
    if (viewMode === "family") return event.Member === "family";
    if (viewMode === "member" && selectedMember) return event.Member === selectedMember;
    return false;
  });

  const openAddEventModal = () => {
    if (scheduleRef.current) {
      scheduleRef.current.openEditor({}, "Add");
    }
  };


  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Schedule Component */}
      <div style={{ flex: 3}}>
        <ScheduleComponent
          ref={scheduleRef}
          selectedDate={new Date()}
          eventSettings={{ dataSource: events }}
          startHour="06:00"
          endHour="12:00"
          showTimeIndicator={true}
          views={['Day', 'Week']} 
        >
          <Inject services={[Day, Week]} />
        </ScheduleComponent>
      </div>

      {/* Sidebar */}
      <div style={{ flex: 1 }}>
        {/* Add New Event Button */}
        <Title level={4}>Calendar Options</Title>
        <Select
          value={viewMode}
          onChange={(value) => setViewMode(value)}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <Option value="personal">My Calendar</Option>
          <Option value="family">Family Calendar</Option>
          <Option value="member">Specific Member</Option>
        </Select>

        {viewMode === "member" && (
          <Select
            placeholder="Select a member"
            onChange={(value) => setSelectedMember(value)}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            {members.map((member) => (
              <Option key={member.id} value={member.id}>
                {member.name}
              </Option>
            ))}
          </Select>
        )}
        {
          viewMode !== "member"?(
            <Button type="primary" onClick={openAddEventModal} style={{ width: "100%", marginBottom: "20px" }}>
            Add New Event
          </Button>
          ):""
        }
        <Title level={5}>Upcoming Events</Title>
        <ul style={{paddingInlineStart:"0"}}>
        {ucEvents.map((event) => (
          <UpcomingEvent
            key={event.id}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
          />
      ))}

        </ul>

      </div>
    </div>
  );
};

export default CalendarPage;
