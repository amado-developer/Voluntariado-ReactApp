import React from 'react';
// import samuel from '../../images/samuel.jpeg'
import directora from '../../images/directora.jpeg'
import homeIcon from '../../images/home.png'
const SidebarMenu = (props) => {
    return(
        <div className="side__bar__container">
          <div className="side__bar__profile__picture__container">
            <div className="side__bar__profile__picure">
              <img src={directora} alt='Profile Picture' className="principal__profile__picture"/>
            </div>
          </div>
          <div className="side__bar__menu">
            <div className="home__icon__container">
              <img src={homeIcon} alt='icon' className="home__icon" />
            </div>
          </div>
        </div>
    )
}

export default SidebarMenu;
