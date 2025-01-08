import React, { useState } from 'react';
import { List, Input, Button } from 'antd';
import { SearchOutlined, DownOutlined, MoreOutlined, StarOutlined  } from '@ant-design/icons';
import MessageItem from './MessageItem';

const MessageList = ({ messages, selectedUser, onSelectUser, onSearch }) => {
  const [starredUsers, setStarredUsers] = useState({});


  const handleStarClick = (name) => {
    setStarredUsers((prevState) => ({
      ...prevState,
      [name]: !prevState[name], 
    }));
  };


  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
         {/* Header nhỏ với "All Message" */}
         <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          borderBottom: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>All Message</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button
            type="text"
            icon={<DownOutlined />}
            style={{ padding: 0, fontSize: '10px' }}
          />
          <Button
            type="text"
            icon={<MoreOutlined />}
            style={{ padding: 0, fontSize: '16px' }}
          />
        </div>
      </div>

      {/* Thanh tìm kiếm */}
      <Input
      placeholder="Search or start a new chat"
      onChange={(e) => onSearch(e.target.value)}
      style={{
        borderRadius: '20px',
        padding: '10px 15px',
        marginBottom: '10px',
        width: '90%',
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
              padding: '10px 16px', 
              borderBottom: '1px solid #ddd', 
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center',
              }}
            >
              {/* Thông tin người dùng */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={item.avatar}
                  alt="avatar"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{item.message}</div>
                </div>
              </div>

               {/* Nút ngôi sao */}
               <Button
                shape="circle"
                icon={
                  <StarOutlined
                    style={{
                      color: starredUsers[item.name] ? '#fff' : '#1890ff', 
                    }}
                  />
                }
                style={{
                  backgroundColor: starredUsers[item.name] ? '#1890ff' : '#fff',
                  border: '1px solid #ddd',
                }}
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleStarClick(item.name); 
                }}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default MessageList;
