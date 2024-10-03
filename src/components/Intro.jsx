import React from 'react';
import profileImage from '../assets/temp.jpg';

function Intro() {
  return (
    <div className="intro" id='intro'>
      <h2>Intro</h2>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p>I'm Shreyas, I am a Developer. I Like to develop Programs </p>
    </div>
  );
}

export default Intro;
