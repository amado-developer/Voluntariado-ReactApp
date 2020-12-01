import React, {useState} from "react";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import '../../styles/modal.css';
import '../../styles/student.manager.modal.css'
import studentInfo from "../student.management/student.info";
import StudentInfo from '../student.management/student.info'
import StudentStateSelector from '../student.management/student.state.selector';

const StudentManagerModal = ({changeIsModalShown, students}) =>{
    const [selectedId, changeSelectedId] = useState(1);
    let pendingStudents  = [];
    let acceptedStudents = [];
    let rejectedStudents = [];
    
    students.map(student =>{
        if(student.state === 'Pending'){
            pendingStudents = [...pendingStudents, student.id];
        }else if(student.state  === 'Accepted'){
            acceptedStudents = [...acceptedStudents, student.id];
        }else if(student.state === 'Rejected'){
            rejectedStudents = [...rejectedStudents, student.id];
        }
    });

    // console.log('Pending Students: ' + pendingStudents.length);
    // console.log('Accepted Students: ' + acceptedStudents.length);
    // console.log('Rejected Students: ' + rejectedStudents.length);
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
                    <div>
                        <StudentStateSelector changeSelectedId={changeSelectedId} />
                    </div>
                    {
                            selectedId === 1 ? (pendingStudents.length > 0 ? (
                                pendingStudents.map(student =>{
                                   return (<StudentInfo key={student} index={student} changeIsModalShown={changeIsModalShown} />)
                                })
                            ) : <h2>No hay solicitudes pendientes</h2>) : <></>
                          
                         
                        }

                        {
                              selectedId === 2 ? (acceptedStudents.length > 0 ? (
                                acceptedStudents.map(student =>{
                                   return (<StudentInfo key={student} index={student}  changeIsModalShown={changeIsModalShown}/>)
                                })
                            ) : <h2>No hay solicitudes aceptadas</h2>) : <></>
                        }
                        {
                                selectedId === 3 ? (rejectedStudents.length > 0 ? (
                                    rejectedStudents.map(student =>{
                                       return (<StudentInfo key={student} index={student}  changeIsModalShown={changeIsModalShown}/>)
                                    })
                                ) : <h2>No hay solicitudes rechazadas</h2>) : <></>
                        }

                </div>
            </div>

        </div>

    )

};

export default connect(
    state=>({
        studentsId: selectors.getOrderedStudentsManager(state),
        students: selectors.getStudentsManager(state),
        
    }),
)(StudentManagerModal);