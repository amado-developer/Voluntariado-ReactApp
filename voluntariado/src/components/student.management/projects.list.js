import React,{ useState, useEffect, Fragment, button } from "react";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/available.projects';
import '../../styles/student.manager.css';
import StudentProjectList from './student.project.list'

const ProjectList = ({user, data}) =>{
    const userName = user.first_name + " " + user.last_name;

    return(
        <div className='wrapper'>
            <div className="home__header">
                <h1>{`Bienvenido ${userName}!`}</h1>
                <h2>Manejar Proyectos</h2>
            </div>
        
            <div className="project_list"> {


                data.length === 0 &&(
                    <p className="empty_projects">No hay Proyectos disponibles</p>
                )}
            
            {   
                data.length > 0 &&(
                    
                    data.map(e=>{
                        if(e !== undefined)
                        {
                            return <StudentProjectList index={e.id} key={e.id} />
                        }
                }))
            }
             
            </div>



        </div>
    )
}




export default connect(
    state=>({
        user: selectors.getAuthUser(state),
        data: selectors.getAvailableProjects(state),
    }),
)
(ProjectList);