import { useState } from 'react';

const usePublications = (profile) => {
  const [previewItem, setPreviewItem] = useState(0);
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [mentions, setMentions] = useState('');

  const openPreview = (postNumber) => {
    setPreviewItem(postNumber);
  };

  const updatePic = () => {
    alert("J'update la publication avec l'id : " + profile.posts[previewItem].id);
  };

  const deletePic = () => {
    alert("Je supprime la publication avec l'id : " + profile.posts[previewItem].id);
  };

  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  };

  return {
    previewItem,
    description, setDescription,
    hashtags, setHashtags,
    mentions, setMentions,
    openPreview,
    updatePic,
    deletePic,
    uploadPicture
  };
};

export default usePublications;
