import React,{useState} from 'react';
import '../../styles/studentManagerDisplayer.css'
const StudentManagerDisplayer = ({data, changeIsModalShown}) =>{
    
    const {description} = data;
    const company = data.company;
    const project = data.project;

    return(
        <div className='main_container'>
            <div className ='project'>

                <div>
                    <div className = 'ptm'>
                        <p className="project_name">{project}</p>
                    </div>

                    <div className="project_description">
                        <p className="project_company">{company}</p>
                    </div>
                </div>

                <div className='student_manager_button'>
                    <button onClick={e => {changeIsModalShown(true);}} >Ver Estudiantes </button>


                </div>

            </div>

        </div>
    )

}

export default StudentManagerDisplayer;