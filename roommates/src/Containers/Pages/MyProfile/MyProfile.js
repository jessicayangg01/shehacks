import React from "react";
import './MyProfile.css';
import profile from "./profilephoto.jpg";

class MyProfile extends React.Component {
  render() {
    return(
      <div className="myProfile" position="absolute">
        <div position="absolute">
          <img src={profile} alt="Dorm Room" class="img"></img>
        </div>
        <div className="info">
          
          Name:  <input type="text" placeholder="eg; Jessica" id="profileName"></input> <br/>
          University: <input type="text" placeholder="eg; Western University" id="profileUniversity"></input> <br/>
          Year: <input type="text" placeholder="eg; 2" id="profileYear"></input> <br/>
          Program: <input type="text" placeholder="eg; Computer Science" id="profileProgram"></input> <br/>
          Interests:<input type="text" placeholder="eg; Video Games" id="profileInterests"></input> <br/>
        </div>
      </div>
    );
  }
}

export default MyProfile;
