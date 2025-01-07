import React from 'react';
import { List, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MessageItem from './MessageItem';

const MessageList = ({ messages, selectedUser, onSelectUser, onSearch }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Thanh tìm kiếm */}
      <Input
      placeholder="Search or start a new chat"
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: '10px',
        borderBottom: '1px solid #ddd',
        border: '10px',
        marginBottom: '10px',
      }}
      prefix={
        <SearchOutlined
          style={{
            color: '#1890ff', 
            marginRight: '8px', 
          }}
        />
      }
    />
      {/* Danh sách người dùng */}
      <List
        style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}
        dataSource={messages}
        renderItem={(item) => (
          <div
            onClick={() => onSelectUser(item)}
            style={{
              cursor: 'pointer',
              background: selectedUser?.name === item.name ? '#e6f7ff' : '#fff',
            }}
          >
            <MessageItem
              name={item.name}
              message={item.message}
              time={item.time}
              avatar={item.avatar}
            />
          </div>
        )}
      />
    </div>
  );
};

export default MessageList;
