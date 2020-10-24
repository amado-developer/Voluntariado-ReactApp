import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import RecommendedProject from './recommended.project';
import '../../styles/projectRequestApproval.css';

const RecomendedProjects = ({user, data, navigate}) =>{
    const userName = user.first_name + " " + user.last_name;
    return(
        <div>
            <div className="home__header">
                <h1>{`Bienvenido ${userName}!`}</h1>
                <div className="top__navigation__buttons">
                    <button onClick={() => navigate(1)} style={{color: "black"}}>Disponibles</button>
                    <button onClick={() => navigate(2)} style={{color: "#078b45"}}>Recomendados</button>
                </div>
               
                <h2>Proyectos recomendados</h2>
               
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
                    return <RecommendedProject index={id} key={id} />
                }))
            }
            </div>
        </div>
    )
};

export default connect(
    state=>({
        user: selectors.getAuthUser(state),
        data: selectors.getRecommendedProjects(state),
    })
)
(RecomendedProjects);