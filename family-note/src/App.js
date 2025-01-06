import React from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Message from "./pages/Message";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";

const { Header, Content, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Header */}
      <Header
        style={{
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ color: "#3D64FD", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/dashboard")} // Điều hướng về Dashboard khi click vào logo
        >
          FamilyNote
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => navigate(key)}
          items={[
            { key: "/calendar", label: "Calendar" },
            { key: "/message", label: "Message" },
            { key: "/task", label: "Task" },
          ]}
        />
      </Header>

      <Content style={{ padding: "20px", background: "#fff", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Đặt trang Dashboard là mặc định */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/message" element={<Message />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        FamilyNote ©2025 SE215
      </Footer>
    </Layout>
  );
};

const AppWithRouter = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#3D64FD",
        colorBgContainer: "#f9f9f9",
      },
    }}
  >
    <Router>
      <App />
    </Router>
  </ConfigProvider>
);

export default AppWithRouter;
