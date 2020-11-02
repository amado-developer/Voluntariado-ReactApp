import React,{useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import '../../styles/studentManagerDisplayer.css'
import '../../styles/student.manager.modal.css'

const StudentInfo = ({student}) =>{
    
    const firstName = student.student.first_name;
    const lastName = student.student.last_name;
    const collegeId = student.student.college_id;
    const phoneNumber = student.student.phone_number;
    const {email} = student.student;
    console.log(student.student);
    return(
        <div className='student_container'>
            <div className ='student'>
                <h1>{`${firstName} ${lastName}`}</h1>
                <h1>{collegeId}</h1>
                <h1>{phoneNumber}</h1>
                <h1>{email}</h1>

                <div className='buttons_container'>
                    <button className='accept_button'> Aceptar</button>
                    <button className='reject_button'> Rechazar</button>
                </div>

            </div>

        </div>
    )

}

export default connect(
    (state, {index})=>({
        student: selectors.getStudentManager(state, index)
    })
)(StudentInfo);