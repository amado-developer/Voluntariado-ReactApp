import React, {useEffect} from 'react';
import SideBar from '../sidebar';
import Tono from '../../images/Tono.jpg';
import Header from '../header';
import Logo from '../../images/uvg_logo_black.png';
import AvailableProjects from './available.projects';
import Profile from './student.profile';
import * as actions from '../../redux/actions/available.projects';
import '../../styles/student.css';
import {connect} from 'react-redux';
const Home = () =>{
    return(
        <div className="home-wrapper">
            <div className="left-wrapper">
                <SideBar profilePicture={Tono} />
            </div>
            <div className="right-wrapper">
                <Header color={'#FFFFFF'} logo={Logo} />
                <div className="projects-wrapper">
                    <Profile />
                    {/* <AvailableProjects /> */}
                </div>
            </div>
        </div>
    )
}

export default Home;

