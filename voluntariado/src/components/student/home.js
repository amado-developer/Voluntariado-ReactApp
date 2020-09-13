import React, {useEffect, useState} from 'react';
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
    const [navigation, navigate] = useState(1);
    const Components = [<Profile />, <AvailableProjects />]
    const Component = Components[navigation];
    console.log(<Profile />);
    return(
        <div className="home-wrapper">
            <div className="left-wrapper">
                <SideBar profilePicture={Tono} navigate={navigate} />
            </div>
            <div className="right-wrapper">
                <Header color={'#FFFFFF'} logo={Logo} />
                <div className="projects-wrapper">
                    { Component }
                </div>
            </div>
        </div>
    )
}

export default Home;

