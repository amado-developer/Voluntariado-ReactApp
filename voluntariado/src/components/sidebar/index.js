import React from 'react';
// import directora from '../../images/directora.jpeg'
import douglas from '../../images/doug2.png';
import profileIcon from '../../images/user-profile-icon.png'
import homeIcon from '../../images/home.png'
const SidebarMenu = ({profilePicture, navigate}) => {
    return(
        <div className="side__bar__container">
          <div className="side__bar__profile__picture__container">
            <div className="side__bar__profile__picure">
              <img 
              src={profilePicture} 
              alt='Profile Picture' 
              className="principal__profile__picture"
              onClick={() => {
                if(navigate !== undefined){
                  navigate(0);
                }
               
              }}
              />
            </div>
          </div>
          <div className="side__bar__menu">
            <div className="home__icon__container">
              <img src={homeIcon} alt='icon' className="home__icon" 
              onClick={() => {
                if(navigate !== undefined){
                  navigate(1);
                }
              }} />
            </div >
            {/* <div className="home__icon__container">
              <img src={profileIcon} alt='icon' className="home__icon" />
            </div> */}
          </div>
        </div>
    )
}

export default SidebarMenu;
