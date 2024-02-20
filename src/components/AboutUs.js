import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" alt="Profile" />
      <h1>About Me</h1>
      <p>I help agencies & brands to turn their ideas into designs. My heart is creativity and design and my head<br/>has always been business led. Which to this day has served me very well!</p>
      <div className="icon">
       
        
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt="Facebook" />
          <img src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg' alt="Instagram" />
          <img src='https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg' alt="Twitter" />
        
      </div>
      <button className="btn">meet@patel</button>
      <button className="btn2">See Design Work</button>
    </div>
  );
};

export default AboutUs;
