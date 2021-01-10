import React from "react";
import './HowItWorks.css';
import dorm from './pexels-photo-5137980.jpeg';
import ButtonTemplate from "../../Tools/ButtonTemplate";

class HowItWorks extends React.Component {

  render() {
    return (
      <div className="howitworks">
        <div position="absolute" style={{right: "40px", bottom: "-10%"}}>
          <ButtonTemplate text="Login" className="loginbutton"></ButtonTemplate>
        </div>
        {/* <img src={roomImage}  alt="image of decorated room" style={{width: "100%", height: "auto"}}/> */}
        <svg height="800" width="100%" position="absolute">
          <rect x="10%" y="410" rx="20" ry="20" width="280" height="250" className="cornersBox"  fill="#9fffcb"/>
          <circle cx="19%" cy="300" r="160" fill="#7e4e60"/>        

          <rect x="40%" y="410" rx="20" ry="20" width="280" height="250" className="cornersBox"  fill="#9fffcb"/>
          <circle cx="49%" cy="300" r="160" fill="#7e4e60"/>        

          <rect x="70%" y="410" rx="20" ry="20" width="280" height="250" className="cornersBox" fill="#9fffcb" />
          <circle cx="79%" cy="300" r="160" fill="#7e4e60"/>        

        </svg>
      </div>
    );
  }
}

export default HowItWorks;
