import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import douglas from '../../images/doug2.png';
import profileIcon from '../../images/user-profile-icon.png'
import whiteHomeIcon from '../../images/home_white_icon.png';
import blackHomeIcon from '../../images/home_black_icon.png';
import whiteReportIcon from '../../images/white_report_icon.png';
import blackReportIcon from '../../images/black_report_icon.png';
import managerIcon from '../../images/manager.png'

const StudentElements=({profilePicture, navigate, studentEnrollment})=>{
   const isEnrolled = studentEnrollment.Accepted;
   const [selected, setSelected] = useState(1);
    return(
        <div className="side__bar__container">
          <div className="side__bar__profile__picture__container">
            <div className="side__bar__profile__picure" style={{
              backgroundColor: selected === 0   ? 'white' : '#078b45',
            }}>
              <img 
              src={profilePicture} 
              alt='Profile Picture' 
              className="principal__profile__picture"
              onClick={() => {
                if(navigate !== undefined){
                  navigate(0);
                  setSelected(0);
                }
               
              }}
              />
            </div>
          </div>
          <div className="side__bar__menu">
            <div className="home__icon__container" style={{
              backgroundColor: selected === 1 ? 'white' : '#078b45',
            }}>
              <img src={selected === 1 ? blackHomeIcon : whiteHomeIcon} alt='icon' className="home__icon" 
              onClick={() => {
                if(navigate !== undefined){
                  navigate(1);
                  setSelected(1);
                }
              }} />
            </div >

            {isEnrolled ? 
            <div className="report__icon__container" style={{
              backgroundColor: selected === 3 ? 'white' : '#078b45',
            }}>
              <img src={selected === 3 ? blackReportIcon : whiteReportIcon} alt='icon' className="report__icon" 
              onClick={() => {
                if(navigate !== undefined){
                  navigate(3);
                  setSelected(3);
                };
              }}/>
            </div >
            :
            <></>
            }
          </div>
        </div>
    )
}

export default connect(
  state=>({
    studentEnrollment : selectors.getProjectEnrollmentStatus(state)
  })
)(StudentElements);