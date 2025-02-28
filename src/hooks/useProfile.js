import { useState } from 'react';
import { message } from 'antd/es';
import profileData from '../data/profileData';

const useProfile = () => {
  const [profile, setProfile] = useState(profileData);
  const [email, setEmail] = useState(profileData.email);
  const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);
  const [firstname, setFirstname] = useState(profileData.firstname);
  const [lastname, setLastname] = useState(profileData.lastname);

  const updateProfile = () => {
    let updatedProfile = {...profile};
    updatedProfile.email = email;
    updatedProfile.firstname = firstname;
    updatedProfile.lastname = lastname;
    updatedProfile.phoneNumber = phoneNumber;
    setProfile(updatedProfile);
    message.success('Profile well updated', 3);
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  };

  return {
    profile,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    firstname, setFirstname,
    lastname, setLastname,
    updateProfile,
    formatDate
  };
};

export default useProfile;
