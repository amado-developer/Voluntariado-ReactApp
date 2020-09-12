import React from 'react';
import Tono from '../../images/Tono.jpg';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import '../../styles/student.profile.css';
import pdfIcon from '../../images/pdf.png';
import FileSaver from 'file-saver';
import { Link } from 'react-router-dom';
const StudentProfile = ({user}) =>{
   
    const firstName = user.first_name;
    const lastName = user.last_name;
    const {major, email, cv} = user;
    const collegeID = user.college_id;
    const phoneNumber = user.phone_number;
    const pdf = cv;

    return(
        <div className="student-profile-wrapper">
            <h1>Perfil</h1>
            <div className="top-student-profile-wrapper">
                <div className="student-profile-picture-wrapper">
                    <img 
                    alt='profile picture' 
                    className="student-profile-picture" 
                    src={Tono}
                    />
                </div>
                <div className="basic-student-info-wrapper">
                    <p>Nombre: {firstName + ' ' + lastName }</p>
                    <p>Carrera: {major} </p>
                    <p>Carne: {collegeID} </p>
                </div>
            </div>
            <div className="bottom-student-profile-wrapper">
                <div className="student-contact-info">
                    <p>Correo Electronico:</p>
                    <p>{email}</p>
                </div>
                <div className="student-contact-info">
                    <p>Celular / telefono:</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className="student-profile-cv">
                    <button  onClick={() => FileSaver.saveAs(cv, firstName + "_" + lastName + "_CV.pdf")}>Descargar CV</button>
                    <div>
                        <img alt="pdf" src={pdfIcon} />
                        <input type="file" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default connect(
    state=> ({
        user: selectors.getAuthUser(state),
       
    })
)
(StudentProfile);