import React, { useState, useRef } from 'react';
import { Input, Avatar,Modal, Button } from 'antd';
import { PlusOutlined, SmileOutlined, StarOutlined, SearchOutlined, MoreOutlined } from '@ant-design/icons';
import EmojiPicker from 'emoji-picker-react';

const ChatWindow = ({ selectedUser, messages, onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [searchValue, setSearchValue] = useState(""); 


  const handleOpenModal = () => {
    setIsModalVisible(true);
  };


  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue,
        isMe: true,
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true, 
        }),
      };
      onSend(newMessage);
      setInputValue('');
    }
  };
  

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prev) => prev + emojiObject.emoji); 
  };


  const fileInputRef = useRef(null);

  
  const handleAddFileClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`Selected files: ${Array.from(files).map((file) => file.name).join(', ')}`);
    }
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={selectedUser?.avatar} size={40} />
          <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '16px' }}>
            {selectedUser?.name || 'Select a user'}
          </span>
        </div>

        {/* Các nút bên phải */}
        <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto', }}>
         
          <Button
            shape="circle"
            icon={<SearchOutlined style={{ color: '#000000' }} />}
            style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
            onClick={handleOpenModal}
          />
          {/* Modal chứa ô tìm kiếm */}
          <Modal
            title="Search"
            visible={isModalVisible}
            onCancel={handleCloseModal} // Đóng modal
            footer={null} // Không có nút ở footer
          >
            {/* Ô tìm kiếm */}
            <Input
              placeholder="Type something..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} // Lưu giá trị input
              style={{ width: "100%", marginTop: "10px" }}
            />
          </Modal>
          <Button
            shape="circle"
            icon={<MoreOutlined style={{ color: '#000000' }} />}
            style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
            onClick={() => alert('More Options Clicked!')}
          />
        </div>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          background: '#f7f7f7',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  maxWidth: '70%',
                  padding: '10px',
                  borderRadius: '10px',
                  background: msg.isMe ? '#1890ff' : '#e6f7ff',
                  color: msg.isMe ? '#fff' : '#000',
                }}
              >
                {msg.text}
              </div>
            </div>
            {/* Hiển thị thời gian nhắn bên dưới */}
            <div
              style={{
                fontSize: '12px',
                color: '#888',
                marginTop: '5px',
                textAlign: msg.isMe ? 'right' : 'left',
              }}
            >
              {msg.timestamp}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderTop: '1px solid #ddd',
          background: '#fff',
          justifyContent: 'center'
        }}
      >

        <div style={{ position: 'relative', marginRight: '10px' }}>
          <SmileOutlined
            style={{ fontSize: '24px', color: '#1890ff', cursor: 'pointer' }}
            onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
          />
          {isEmojiPickerOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                zIndex: 10,
              }}
            >
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
          style={{
            borderRadius: '20px',
            padding: '10px 15px',
            width: '50%',
          }}
          onPressEnter={handleSend}
        />

        <div style={{ marginLeft: '10px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#1890ff',display: 'flex',  alignItems: 'center',justifyContent: 'center', cursor: 'pointer', }}>
          <PlusOutlined
            style={{ fontSize: '20px', color: '#fff'}}
            onClick={handleAddFileClick}
          />
            {/* Input file (ẩn) */}
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange} // Xử lý file sau khi người dùng chọn
            multiple // Cho phép tải lên nhiều file
            webkitdirectory="" // Thêm thuộc tính này để hỗ trợ chọn thư mục (nếu cần)
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
