import React,{useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/student.manager';
import '../../styles/studentManagerDisplayer.css'
const StudentManagerDisplayer = ({data, changeIsModalShown, fetchStudents}) =>{
    const {description, id} = data;
    const company = data.company;
    const project = data.project;

    return(
        <div className='main_container'>
            <div className ='project'>

                <div>
                    <div className>
                        <p className="project_name">{project}</p>
                    </div>

                    <div className="project_company_container">
                        <p className="project_company">{company}</p>
                    </div>

                    <div className="project_description_container">
                        <p className="project_description">{description}</p>
                    </div>
                    
                </div>

                <div className='student_manager_button'>
                    <button onClick={e => {changeIsModalShown(true); fetchStudents(id)}} >Ver Estudiantes </button>
                </div>

            </div>

        </div>
    )

}

export default connect(
    undefined,
    dispatch => ({
        fetchStudents(projectId){
            dispatch(actions.startFetchingStudentManager(projectId))
        }
    }),
)(StudentManagerDisplayer);