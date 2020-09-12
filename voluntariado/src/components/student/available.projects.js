import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import AvailableProject from './available.project';
import '../../styles/projectRequestApproval.css';

const AvailableProjects = ({user, data}) =>{
    const userName = user.first_name + " " + user.last_name;
    return(
        <div>
            <div className="home__header">
                <h1>{`Bienvenido ${userName}!`}</h1>
                <h2>Proyectos disponibles</h2>
            </div>
            <div className="pending__projects__container">
            {
                data.length === 0 &&(
                    <p className="empty__projects">No hay Proyectos disponibles</p>
                )
            }
            {   
                data.length > 0 &&(
                data.map(({id})=>{
                    return<AvailableProject index={id} key={id} />
                }))
            }
            </div>
        </div>
    )
};

export default connect(
    state=>({
        user: selectors.getAuthUser(state),
        data: selectors.getAvailableProjects(state),
    })
)
(AvailableProjects);