import React from "react";
import { Card, Tag, List } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const TaskList = ({ tasks }) => {
  // Lọc nhiệm vụ còn hạn và chưa hoàn thành

  const getStatusTag = (status) => {
    return status === "1" ? (
      <Tag icon={<ClockCircleOutlined />} color="warning">
        Unfinished
      </Tag>
    ) : (
      <Tag icon={<CheckCircleOutlined />} color="success">
        Finish
      </Tag>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", color:"#3D64FD" }}>Expired Task</h2>

        <List
          grid={{ gutter: 16, column: 5 }} 
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <Card
                title={<span style={{  color:"#3D64FD" }}>{task.name}</span>}
                extra={getStatusTag(task.status)}
                hoverable
                style={{background:"#ffffff"}}
              >
                <p>{task.description}</p>
                <p>
                    End at:{" "}
                  <span style={{  color:"#3D64FD" }}>{new Date(task.dueDate).toLocaleDateString()}</span>
                </p>
              </Card>
            </List.Item>
          )}
        />
    </div>
  );
};

export default TaskList;
