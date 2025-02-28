import React from 'react';
import { Modal, Row, Col, Input } from 'antd/es';
import MentionsTagsComponent from '../../MentionsTagsComponent';

const UploadModal = ({ visible, onCancel, onUpload, description, setDescription, hashtags, setHashtags, mentions, setMentions }) => {
  return (
    <Modal 
      title="Upload a picture" 
      okText="Upload" 
      visible={visible} 
      onOk={onUpload} 
      onCancel={onCancel}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input 
            id="description" 
            title="Description" 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </Col>
      </Row>
      <MentionsTagsComponent 
        type="mentions" 
        value={mentions} 
        title="Mention a user" 
        setValue={setMentions} 
      />
      <MentionsTagsComponent 
        type="tags" 
        value={hashtags} 
        title="Hashtags" 
        setValue={setHashtags} 
      />
    </Modal>
  );
};

export default UploadModal;
