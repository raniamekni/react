import React from "react";
import images from "../images.jpg";



class ProfilePhoto extends React.Component {
  render() {
    
    return  <img id="img" src={images} alt="bébé"  width= {400}  height={400}  />;

    

  }
}

export default ProfilePhoto;