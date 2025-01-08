import React, { useState } from 'react';
import { Layout } from 'antd';
import MessageList from '../components/MessageList';
import ChatWindow from '../components/ChatWindow';

const { Sider, Content } = Layout;

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'Alice',
      message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?',
      time: 'Today | 05:30 PM',
      avatar: 'profile1.png',
    },
    {
      name: 'Bob',
      message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?',
      time: 'Today | 05:30 PM',
      avatar: 'profile2.png',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { text: 'Oh, hello! All perfectly. I will check it and get back to you soon', isMe: true },
    { text: 'Oh, hello! All perfectly. I will check it and get back to you soon', isMe: false },
  ]);

  const handleSend = (newMessage) => {
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <Layout style={{ height: '100vh' }}>
      {/* Sidebar */}
      <Sider width={300} style={{ background: '#fff', borderRight: '1px solid #ddd' }}>
        <MessageList
          messages={filteredUsers}
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
          onSearch={handleSearch}
        />
      </Sider>

      {/* Main Content */}
      <Content>
        {selectedUser ? (
          <ChatWindow
            selectedUser={selectedUser}
            messages={chatMessages}
            onSend={handleSend}
          />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
            <h2>Select a user to start chatting</h2>
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default App;
