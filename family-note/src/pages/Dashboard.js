import React from "react";
import { Layout, Avatar, Calendar, Progress, Card, List } from "antd";
import {
  BellOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Dữ liệu cho biểu đồ
  const data = [
    { month: "Aug 2018", value: 100 },
    { month: "Sep 2018", value: 300 },
    { month: "Oct 2018", value: 200 },
    { month: "Nov 2018", value: 400 },
    { month: "Dec 2018", value: 350 },
    { month: "Jan 2019", value: 500 },
  ];

  // Dữ liệu cho Backlog Tasks
  const tasks = [
    { title: "Buy fruit", progress: 8, total: 10, users: ["John", "Mary"] },
    { title: "Buy fruit", progress: 5, total: 10, users: ["Bob", "Linda"] },
    { title: "Buy fruit", progress: 3, total: 10, users: ["John", "Mary"] },
    { title: "Buy fruit", progress: 4, total: 10, users: ["Linda"] },
  ];

  // Dữ liệu tỷ lệ hoàn thành
  const completionData = [
    { name: "John", completion: 100 },
    { name: "Mary", completion: 76 },
    { name: "Bob", completion: 62 },
    { name: "Linda", completion: 49 },
  ];

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
        {/* Nội dung chính */}
        <Content style={{ padding: "20px", background: "#f9f9f9" }}>
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
                <List.Item>
                  <span>{item.name}</span>
                  <Progress
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
        <Sider width={300} style={{ background: "#fff", padding: "20px" }}>
          {/* Calendar */}
          <Card title="Calendar" style={{ marginBottom: 20 }}>
            <Calendar fullscreen={false} />
          </Card>

          {/* Incoming Events */}
          <Card title="Incoming Event">
            <List
              dataSource={[
                {
                  title: "A virtual evening of smooth jazz",
                  date: "1st May",
                  time: "2:00 PM",
                },
                {
                  title: "Jo malone london’s mother’s day",
                  date: "1st May",
                  time: "2:00 PM",
                },
                {
                  title: "Women's leadership conference",
                  date: "1st May",
                  time: "2:00 PM",
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <h4>{item.title}</h4>
                    <p>
                      {item.date} - {item.time}
                    </p>
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
