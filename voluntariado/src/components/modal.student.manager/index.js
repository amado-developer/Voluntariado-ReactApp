import React from "react";
import {useHistory} from 'react-router-dom';
import '../../styles/modal.css';
import '../../styles/student.manager.modal.css'
import StudentInfo from '../student.management/student.info'
const StudentManagerModal = ({body, changeIsModalShown}) =>{

    const history = useHistory();
    function handleClick(e, isShown) {
      e.stopPropagation();
      changeIsModalShown(isShown); 
    }

    return(

        <div className='modal-wrapper'>
            <div className="modal-backdrop" onClick={e => handleClick(e, false)} >
                <div className="modal-student-box" onClick={e => handleClick(e, true)}>
                    <p className="close" onClick={e => handleClick(e, false)} />
                    <div className='modal-tittle'>
                        <h2>Listado de Estudiantes Inscritos</h2>
                        
                    </div>
                    <StudentInfo/>
                    <StudentInfo/>
                </div>
            </div>

        </div>


    )

};

export default StudentManagerModal