import React from "react";
import { Layout, Avatar, Calendar, Progress, Card, List } from "antd";
import {
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/pages/DashBoard.css"

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Data for the chart
  const data = [
    { month: "Aug 2018", value: 100 },
    { month: "Sep 2018", value: 300 },
    { month: "Oct 2018", value: 200 },
    { month: "Nov 2018", value: 400 },
    { month: "Dec 2018", value: 350 },
    { month: "Jan 2019", value: 500 },
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
    },
    {
      title: "Jo malone london’s mother’s day",
      date: "1st May",
      time: "2:00 PM",
      img: "jazz.jfif",
    },
    {
      title: "Women's leadership conference",
      date: "1st May",
      time: "2:00 PM",
      img: "jazz.jfif",
    },
  ];   

  const dateCellRender = (current, info) => { 
    const date = current.date(); 
    console.log(date); 
    const customStyle = [{ 
      backgroundColor: '#1890ff', // Blue color
      color: '#fff', borderRadius: '50%', 
      display: 'inline-block', 
      width: '100%', 
      height: '100%', 
      lineHeight: '24px', 
      textAlign: 'center' 
  },  
  { 
    backgroundColor: '#B2972B', // Blue color
    color: '#fff', borderRadius: '50%', 
    display: 'inline-block', 
    width: '100%', 
    height: '100%', 
    lineHeight: '24px', 
    textAlign: 'center' 
},  
{ 
  backgroundColor: 'green', // Blue color
  color: '#fff', borderRadius: '50%', 
  display: 'inline-block', 
  width: '100%', 
  height: '100%', 
  lineHeight: '24px', 
  textAlign: 'center' 
}];
function getRandomNumber() { 
  return Math.floor(Math.random() * 3) ;
}

 // Add the specific dates you want to style 
 const style = customStyle[getRandomNumber()];
const highlightedDates = [9,17,16,25]; 
if (highlightedDates.includes(date)) { 
  console.log("A");
  return <div className="ant-fullcalendar-selected-day" style={style}>{date}</div>; 
} 
 };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Header */}
      <Header
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
      </Header>

      <Layout>
        {/* Main Content */}
        <Content style={{ padding: "20px", background: "#f9f9f9", width:"50%" }}>
          {/* Statistic */}
          <Card title="Statistic" style={{ marginBottom: 20 }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Backlog Tasks */}
          <Card title="Backlog Tasks" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {tasks.map((task, index) => (
                <Card key={index} style={{ flex: 1 }}>
                  <h4>{task.title}</h4>
                  <Progress
                    percent={(task.progress / task.total) * 100}
                    size="small"
                  />
                  <p style={{ margin: "10px 0 0" }}>+5 users</p>
                </Card>
              ))}
            </div>
          </Card>

          {/* Completion Rate */}
          <Card title="Completion Rate">
            <List
              dataSource={completionData}
              renderItem={(item) => (
                <List.Item  >
                  <span>{item.name}</span>
                  <Progress
                    style={{
                      marginLeft:"5px", 
                      width:"90%"
                    }}
                    percent={item.completion}
                    size="small"
                    status="active"
                  />
                </List.Item>
              )}
            />
          </Card>
        </Content>

        {/* Sidebar */}
        <Sider width={400} style={{ background: "#fff", padding: "20px" }}>
          {/* Calendar */}
          <Card title="Calendar" style={{ marginBottom: 20 }}>
            <Calendar fullscreen={false} cellRender={ 
              dateCellRender
            } />
          </Card>

          {/* Incoming Events */}
          <Card title="Incoming Event">
            <List
              dataSource={events}
              renderItem={(item) => (
                <List.Item>
                  <div className="event_item">
                    <img src={item.img} style={{ width: "45px", height: "68px" }} />
                    <div>
                    <h4>{item.title}</h4>
                    <p>
                      {item.date} - {item.time}
                    </p> 
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
