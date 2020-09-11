import React from 'react';
import SideBar from '../sidebar';
import Tono from '../../images/Tono.jpg';
import Header from '../header';
import Logo from '../../images/uvg_logo_black.png';
import '../../styles/student.css';
const Home = () =>{
    return(
        <div className="home-wrapper">
            <div className="left-wrapper">
                <SideBar profilePicture={Tono} />
            </div>
            <div className="right-wrapper">
                <Header color={'#FFFFFF'} logo={Logo} />
                <h1>Bienvenido Usuario Dummy</h1>
                <div className="projects-wrapper">
                                         
                </div>
            </div>
        </div>
    )
}

export default Home;

