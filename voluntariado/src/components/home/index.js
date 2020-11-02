import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/project.request.approval';
import Sidebar from '../sidebar';
import Header from '../header';
import '../../styles/admin.home.css';
import Logo from '../../images/uvg_logo_black.png';
import PendingProjects from '../pending.projects/pending.projects';
import Douglas from '../../images/doug2.png';
import StudentManager from '../student.management/student.manager'
import AdminElements from '../sidebar/admin.elements'
const AdminHome = ({onLoad}) => {
    useEffect(() => {
        onLoad();
    });
    
    const [navigation, navigate] = useState(0);
    const Components = [<PendingProjects/>, <StudentManager/>]
    const Component = Components[navigation];
    const adminSideBarElements = <AdminElements profilePicture={Douglas} navigate={navigate}/>


    return(
    <div className="admin__home__container">
        <div className="left__container">
            <Sidebar Elements={adminSideBarElements} />
        </div>
        <div className="right__container">
            <div>
                <Header color={'white'} logo={Logo} />
            </div>
            <div className="content__container">
                {Component}
            </div>
        </div>
    </div>
    )
};

export default connect(
    undefined,
    dispatch =>({
        onLoad(){
            dispatch(actions.startFetchingProjectRequest());
        }
    })
)
(AdminHome);

