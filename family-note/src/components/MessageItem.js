import React from 'react';
import { Avatar, List } from 'antd';

const MessageItem = ({ name, message, time, avatar }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={
          <>
            <p style={{ margin: 0 }}>{message}</p>
            <span style={{ fontSize: '12px', color: '#aaa' }}>{time}</span>
          </>
        }
      />
    </List.Item>
  );
};

export default MessageItem;
