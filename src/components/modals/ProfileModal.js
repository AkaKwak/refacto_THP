import React from 'react';
import { Modal, Row, Col, Input } from 'antd/es';

const ProfileModal = ({ visible, onCancel, onUpdate, email, setEmail, firstname, setFirstname, lastname, setLastname, phoneNumber, setPhoneNumber }) => {
  return (
    <Modal 
      title="Edit your account" 
      okText="Update" 
      visible={visible} 
      onOk={onUpdate} 
      onCancel={onCancel}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input 
            id="email" 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input 
            id="firstname" 
            type="text" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)} 
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input 
            id="lastname" 
            type="text" 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)} 
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input 
            id="phoneNumber" 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ProfileModal;
