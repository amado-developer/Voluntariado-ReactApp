import React from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../../styles/modal.css';
import '../../styles/student.manager.modal.css'
import StudentInfo from '../student.management/student.info'
import * as selectors from '../../redux/reducers';
const StudentManagerModal = ({changeIsModalShown, projectId, students}) =>{

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
                    {
                        students.length === 0  ? <h2>{'No hay Alumnos registrados'}</h2> : 
                        (students.map(student=>{
                            return (<StudentInfo index={student} key={student}/>)
                        }))
                    }
                    {/* <StudentInfo/> */}
                </div>
            </div>

        </div>


    )

};

export default connect(
    state=>({
        students: selectors.getOrderedStudentsManager(state),
    }),
)(StudentManagerModal);