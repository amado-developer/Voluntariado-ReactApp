import React from 'react';
import Tono from '../../images/Tono.jpg';
import '../../styles/student.profile.css';
const StudentProfile = () =>{
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
                    <p>Nombre: Ricardo Antonio Valenzuela Avila</p>
                    <p>Carrera: Ciencias de la computacion y tecnologias de la informacion TI</p>
                    <p>Carne: 18762</p>
                </div>
            </div>
            <div className="bottom-student-profile-wrapper">
                <div className="student-contact-info">
                    <p>Correo Electronico:</p>
                    <p>val18762@uvg.edu.gt</p>
                </div>
                <div className="student-contact-info">
                    <p>Celular / telefono:</p>
                    <p>52345678</p>
                </div>
                <div className="student-profile-cv">
                    <p >CV: <input type="file" /></p>
                </div>
            </div>
        </div>
    )
};

export default StudentProfile;