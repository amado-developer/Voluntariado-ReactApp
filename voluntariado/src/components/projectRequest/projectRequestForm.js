import React from 'react';
import placeholder from '../../images/user-placeholder.png';
import '../../styles/projectRequestForm.css';
import Header from '../header';
/*
    Nombre de la empresa
    telefono
    email
    nombre del proyecto
    descripcion
    requerimientos
    Tono (joto)
*/
const projectRequestForm = () => (
    <div className="project_request_container">
        <Header color={'#343434'} />
        <div className="blue_bar"></div>
        <div className="project_request_form">
            <img src={placeholder} className="profile_picture"/>
            <button>Subir Imagen del proyecto o empresa </button>
            <input type="text" className="company_name" placeholder="Nombre de la empresa" />
            <input type="text" className="phone_number" placeholder="Telefono"/>
            <input type="text" className="email" placeholder="Correo Electronico"/>
            <input type="text" className="project_name" placeholder="Nombre del proyecto"/>
            <input type="text" className="description" placeholder="Descripcion"/>
            <input type="text" className="requirements" placeholder="Requerimientos"/>
        </div>
    </div>
   
);

export default projectRequestForm;