import React from "react";
import './MyProfile.css';
import roomImage from './blake-woolwine-9w4msoUPAmo-unsplash.jpg';

class MyProfile extends React.Component {
  render() {
    return(
      <div className="myProfile">
        {/* <img src={roomImage}  alt="image of decorated room" style={{width: "100%", height: "auto"}}/> */}
        <svg height="600" width="600" position="absolute">
          <circle cx="300" cy="200" r="170" />
        </svg>
      </div>
    );
  }
}

export default MyProfile;
