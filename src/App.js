// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { Col, Row } from 'antd/es';
import PreviewModal from './components/modals/PreviewModal';
import UploadModal from './components/modals/UploadModal';
import ProfileModal from './components/modals/ProfileModal';
import ProfileCard from './components/ProfileCard';
import PublicationsList from './components/PublicationList';
import useProfile from './hooks/useProfile';
import usePublications from './hooks/usePublications';

const App = () => {
  const [editProfilModal, setEditProfilModal] = useState(false);
  const [previewPublicationModal, setPreviewPublicationModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  
  const { profile, email, setEmail, phoneNumber, setPhoneNumber, firstname, setFirstname, lastname, setLastname, updateProfile, formatDate } = useProfile();
  
  const { previewItem, description, setDescription, hashtags, setHashtags, mentions, setMentions, openPreview, updatePic, deletePic, uploadPicture } = usePublications(profile);

  const handleOpenPreview = (index) => {
    openPreview(index);
    setPreviewPublicationModal(true);
  };

  return (
    <div style={{ margin: 50 }}>
      <PreviewModal 
        visible={previewPublicationModal} 
        onCancel={() => setPreviewPublicationModal(false)}
        post={profile.posts[previewItem]}
        onUpdate={updatePic}
        onDelete={deletePic}
      />
      
      <UploadModal 
        visible={uploadModal} 
        onCancel={() => setUploadModal(false)}
        onUpload={uploadPicture}
        description={description}
        setDescription={setDescription}
        hashtags={hashtags}
        setHashtags={setHashtags}
        mentions={mentions}
        setMentions={setMentions}
      />
      
      <ProfileModal 
        visible={editProfilModal} 
        onCancel={() => setEditProfilModal(false)}
        onUpdate={updateProfile}
        email={email}
        setEmail={setEmail}
        firstname={firstname}
        setFirstname={setFirstname}
        lastname={lastname}
        setLastname={setLastname}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <ProfileCard 
            profile={profile} 
            formatDate={formatDate} 
            onEditProfile={() => setEditProfilModal(true)} 
            onUpload={() => setUploadModal(true)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <PublicationsList 
            posts={profile.posts} 
            onOpenPreview={handleOpenPreview} 
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
