import React, {useEffect, useState} from 'react';
import SideBar from '../sidebar';
import Tono from '../../images/Tono.jpg';
import Header from '../header';
import Logo from '../../images/uvg_logo_black.png';
import AvailableProjects from './available.projects';
import RecommendedProjects from './recommended.projects'
import Profile from './student.profile';
import * as actions from '../../redux/actions/available.projects';
import StudentElements from '../sidebar/students.elements';
import Report from './report';
import '../../styles/student.css';
import {connect} from 'react-redux';
const Home = () =>{
    const [navigation, navigate] = useState(1);
    const Components = [<Profile />, <AvailableProjects navigate={navigate}/>, <RecommendedProjects navigate={navigate} />,  <Report />]
    const Component = Components[navigation];

    const studentSideBarElements = <StudentElements profilePicture={Tono} navigate={navigate}/>;
    return(
        <div className="home-wrapper">
            <div className="left-wrapper">
                <SideBar Elements={studentSideBarElements} />
            </div>
            <div className="right-wrapper">
                <Header color={'#FFFFFF'} logo={Logo} />
                <div className="projects-wrapper">
                   {Component}
                </div>
            </div>
        </div>
    )
}

export default Home;

