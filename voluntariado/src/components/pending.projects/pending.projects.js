import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/reducers';
import PendingProject from './pending.project';
import '../../styles/projectRequestApproval.css';
const PendingProjects = ({user, data=[]}) =>{
    const userName = user.first_name + " " + user.last_name;
    return(
        <div>
            <div className="home__header">
                <h1>{`Bienvenido ${userName}!`}</h1>
                <h2>Proyectos nuevos</h2>
            </div>
            <div className="pending__projects__container">
            {
                data.length === 0 &&(
                    <p className="empty__projects">No hay Proyectos en espera</p>
                )
            }
            {   
                data.length > 0 &&(
                data.map(({id})=>{
                    return<PendingProject index={id} key={id} />
                }))
            }
            </div>
        </div>
    )
};

export default connect(
    state=>({
        user: actions.getAuthUser(state),
        data: actions.getProjectRequests(state),
    })
)
(PendingProjects);