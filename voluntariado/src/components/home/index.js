import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/project.request.approval';
import Sidebar from '../sidebar';
import Header from '../header';
import '../../styles/admin.home.css';
// import Logo from '../../images/uvg_logo_black.png';
import Logo from '../../images/uvg_logo_black.png';
import PendingProjects from '../pending.projects/pending.projects';
const AdminHome = ({onLoad}) => {
    useEffect(() => {
        onLoad();
    });
    return(
    <div className="admin__home__container">
        <div className="left__container">
            <Sidebar />
        </div>
        <div className="right__container">
            <div>
                <Header color={'white'} logo={Logo} />
            </div>
            <div className="content__container">
                
                <PendingProjects />
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

