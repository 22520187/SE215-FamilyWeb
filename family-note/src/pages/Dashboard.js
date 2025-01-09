import React from "react";
import { Layout, Avatar, Progress, Tag,Card, List } from "antd";
import { BellOutlined, DownOutlined} from "@ant-design/icons";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../styles/pages/DashBoard.css"

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Data for the chart
  const data = [
    { month: "Aug 2021", value: 100 },
    { month: "Sep 2021", value: 300 },
    { month: "Oct 2021", value: 200 },
    { month: "Nov 2021", value: 400 },
    { month: "Dec 2021", value: 350 },
    { month: "Jan 2022", value: 500 },
  ];

  // Data for Backlog Tasks
  const tasks = [
    { title: "Buy fruit", progress: 8, total: 10, users: ["John", "Mary"] },
    { title: "Buy fruit", progress: 5, total: 10, users: ["Bob", "Linda"] },
    { title: "Buy fruit", progress: 3, total: 10, users: ["John", "Mary"] },
    { title: "Buy fruit", progress: 4, total: 10, users: ["Linda"] },
  ];

  // Data for Completion Rate
  const completionData = [
    { name: "John", completion: 100 },
    { name: "Mary", completion: 76 },
    { name: "Bob", completion: 62 },
    { name: "Linda", completion: 49 },
  ];

  // Data for Incoming Events
  const events = [
    {
      title: "A virtual evening of smooth jazz",
      date: "1st May",
      time: "2:00 PM",
      img: "jazz.jfif",
      tag:"Family event"
    },
    {
      title: "Jo malone london’s mother’s day",
      date: "1st May",
      time: "2:00 PM",
      img: "jazz.jfif",
      tag:"Personal event"
    },
    {
      title: "Women's leadership conference",
      date: "1st May",
      time: "2:00 PM",
      img: "jazz.jfif",
      tag:"Personal event"
    },
  ];   

  const customDayCell = (args) => {
    const date = args.date.getDate();

    // Điều kiện áp dụng màu cho các ngày cụ thể
    if (date === 2) {
      args.element.classList.add("highlight-yellow");
    } else if (date === 16 || date === 17) {
      args.element.classList.add("highlight-green");
    } else if (date === 20) {
      args.element.classList.add("highlight-purple");
    }
  };

  return (
    <Layout style={{ height: "80vh" }}>
      {/* Header */}
      {/* <Header
        style={{
          background: "#fff",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}>DashBoard</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BellOutlined style={{ fontSize: 20 }} />
          <Avatar src="https://i.pravatar.cc/100" />
          <span>Ammi Watts</span>
          <DownOutlined />
        </div>
      </Header> */}

      <Layout>
        {/* Main Content */}
        <Content style={{ padding: "20px", background: "#ffffff", width:"50%" }}>
          {/* Statistic */}
          {/* <Card title="Statistic" style={{ marginBottom: 20 }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#241cc8" />
              </LineChart>
            </ResponsiveContainer>
          </Card> */}

          {/* Backlog Tasks */}
          <Card 
          title={<span style={{ color: "#3D64FD" }}>Backlog Tasks</span>}
           style={{ marginBottom: 20, background:"#ffffff" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {tasks.map((task, index) => (
                <Card key={index} style={{ flex: 1 ,background:"#ffffff"}}>
                  <h4>{task.title}</h4>
                  <Progress
                    percent={(task.progress / task.total) * 100}
                    strokeColor="#3D64FD" 
                    size="small"
                    trailColor="#f0f0f0" 
                  />
                  <p style={{ margin: "10px 0 0",  fontSize: "14px", color: "#555"  }}>+5 users</p>
                </Card>
              ))}
            </div>
          </Card>

          {/* Completion Rate */}
          <Card 
          style={{  background:"#ffffff" }}
          title={<span style={{ color: "#3D64FD" }}>Completion Rate</span>}>
          <List
            dataSource={completionData}
            renderItem={(item) => (
              <List.Item style={{ justifyContent: "space-between" }}> 
              
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>{item.name}</span>
                <Progress
                  percent={item.completion}
                  style={
                    {
                      width:"90%"
                      
                    }
                  }
                  size="small"
                  strokeColor={
                    item.completion >= 75
                      ? "#52c41a"
                      : item.completion >= 50
                      ? "#faad14"
                      : "#f5222d"
                  } // Màu thay đổi dựa trên giá trị
                  trailColor="#f0f0f0"
                />
              </List.Item>
            )}
          />
        </Card>
        </Content>

        {/* Sidebar */}
        <Sider width={400} style={{ background: "#fff", padding: "20px" }}>
          {/* Calendar */}
          {/* <Card title="Calendar" style={{ marginBottom: 20 }}>
            <CalendarComponent renderDayCell={customDayCell}
             className="custom-calendar" />
          </Card> */}

          {/* Incoming Events */}
          <Card 
          style={{  background:"#ffffff" }}
          title={<span style={{ color: "#3D64FD" }}>Incoming Event</span>} >
            <List
              dataSource={events}
              renderItem={(item) => (
                <List.Item>
                  <div className="event_item">
                    <div>
                    <h4>{item.title}</h4>
                      <p>
                        {item.date} - {item.time}
                      </p> 
                    </div>
                    <div style={{float:'left'}}>
                      <Tag color="#3D64FD">{item.tag}</Tag>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
