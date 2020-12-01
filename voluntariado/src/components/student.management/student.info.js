import React,{useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/student.manager';
import '../../styles/studentManagerDisplayer.css'
import '../../styles/student.manager.modal.css'
import FileSaver from 'file-saver';
import {SERVER} from '../../config';
import {Link} from 'react-router-dom'
import viewIcon from '../../images/view_icon_green.png';
import downloadIcon from '../../images/download_icon_green.png';

import { toast } from 'react-toastify';
toast.configure();

const StudentInfo = ({student, onAccept, onReject, changeIsModalShown}) =>{
    const firstName = student.student.first_name;
    const lastName = student.student.last_name;
    const collegeId = student.student.college_id;
    const phoneNumber = student.student.phone_number;
    const {email, cv} = student.student;

    const notify = valid =>{
        if(valid){
            toast.success('El alumno ha sido aceptado con exito', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }else{
            toast.error('El alumno ha sido rechazado', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }  
    };

    return(
        <div className='student_container'>
            <div className ='student'>
                <div>
                    <h2>Nombre:</h2>
                    <h3>{`${firstName} ${lastName}`}</h3>
                    <h2>Carne: </h2>
                    <h3>{`${collegeId}`}</h3>
                </div>
               <div>
                    <h2>Celular: </h2>
                    <h3>{`${phoneNumber}`}</h3>
                    <h2>Email: </h2>
                    <h3>{`${email}`}</h3>
               </div>
               <div className = "view__save__pdf__container">
                   <h2>Curriculum</h2>
                   <img src={viewIcon} title={"Ver"} className="opencv__img" onClick={ ()=>
                       window.open(`${SERVER}${cv}`, "_blank")
                   }/>
                   <img src={downloadIcon} title={'Descargar'} className="downloadcv__img" onClick={() => FileSaver.saveAs(`${SERVER}${cv}`, firstName + "_" + lastName + "_CV.pdf")}/>
               </div>
                <div className='buttons_container'>
                    <button onClick={() => {
                        onAccept();
                        notify(true);
                    }} className='accept_button'> Aceptar</button>
                    <button onClick={() => {
                        notify(false);
                        onReject();
                    }} className='reject_button'> Rechazar</button>
                </div>

            </div>

        </div>
    )

}

export default connect(
    (state, {index})=>({
        student: selectors.getStudentManager(state, index)
    }),
    (dispatch, {index}) =>({
        onAccept(){
            dispatch(actions.startAcceptingStudent(index));
        },

        onReject(){
            dispatch(actions.startRejectingStudent(index));
        }
    })
)(StudentInfo);