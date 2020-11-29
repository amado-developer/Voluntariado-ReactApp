import React, {useState} from 'react';
import PlaceHolder from '../../images/user-placeholder.png';
import Header from '../header';
import Sidebar from '../sidebar';
import CompanyElements from '../sidebar/company.elements';
import blackUVGLogo from '../../images/uvg_logo_black.png';
import Profile from './profile';

const Home = () => {
    const [navigation, navigate] = useState(0);
    const Components = [<Profile navigate={navigate} />];
    const Component = Components[navigation];
    
    const companySideBarElements = <CompanyElements profilePicture={PlaceHolder} navigate={navigate}/>;
    return(
        <div className="home-wrapper">
            <div className="left-wrapper">
                <Sidebar Elements={companySideBarElements} />
            </div>
            <div className="right-wrapper">
                <Header color={'#FFFFFF'} logo={blackUVGLogo} />
                <div className="projects-wrapper">
                   {Component}
                </div>
            </div>
        </div>
    );
}

export default Home;