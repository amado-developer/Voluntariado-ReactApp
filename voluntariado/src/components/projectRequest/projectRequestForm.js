import React, {useCallback, useState}from 'react';
import {useDropzone} from 'react-dropzone'
import '../../styles/projectRequestForm.css';
import Header from '../header';
import axios from 'axios'

const url = `http://localhost:8000/api/v1/solicitud-proyecto/`;
const post = (company_name, phone_number, email_address, project_name, description, requirements) => {
    const data = {
       company_name,
       phone_number,
       email_address,
       project_name,
       description,
       requirements
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => console.log(res.json()))
}
const ProjectRequestForm = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
      }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    const [companyName, changeCompanyName] = useState('');
    const [phone, changePhone] = useState('');
    const [email, changeEmail] = useState('');
    const [projectName, changeProjectName] = useState('');
    const [description, changeDescription] = useState('');
    const [requirements, changeRequirements] = useState('');

    return(
    <div className="project_request_container">
        <Header color={'#343434'} />
        <div className="blue_bar"></div>
        <div className="project_request_form">
            <div className="left_container">
                <label className="company_name_lbl"> Nombre de la empresa</label>
                <input 
                className="company_name" 
                type="text" 
                value={companyName}
                onChange={e => changeCompanyName(e.target.value)}
                />
                <label className="phone_number_lbl">Teléfono</label>
                <input 
                className="phone_number" 
                type="text" 
                value={phone}
                onChange={e => changePhone(e.target.value)}
                />
                <label className="email_lbl">Correo Electrónico</label>
                <input 
                className="email"
                type="text" 
                value={email}
                onChange={e => changeEmail(e.target.value)}
                />
                <label className="project_name_lbl">Nombre del proyecto</label>
                <input
                className="project_name"  
                type="text" 
                value={projectName}
                onChange={e => changeProjectName(e.target.value)}
                />
            </div>
           
            <div className="right_container">
                <div className="project_description_container">
                    <label className="description_lbl">Descripción del proyecto</label>
                    <textarea 
                    className="description"
                    type="text" 
                    value={description}
                    onChange={e => changeDescription(e.target.value)}
                   />
                </div>
                <div className="project_requirements_container">
                    <label className="requirements_lbl">Requisitos</label>
                    <textarea 
                    className="requirements"
                    type="text"
                    value={requirements}
                    onChange={e => changeRequirements(e.target.value)}
                    />
                </div>
                <div className="project_image_container"> 
                    <div {...getRootProps()} className="drag__zone">
                        <input {...getInputProps()} />
                            {
                                <div className="drag__zone__components">
                                    <p>Arrastre la imagen aqui o</p> 
                                    <button className="upload__btn">Presione para subir imagen</button>
                                </div>
                            }
                    </div>
                </div>
                <div className="submit_request">
                    <button type="submit" className="submit_request_btn" onClick={() => post(companyName, phone, email, projectName, description, requirements)}>Enviar solicitud</button>
                </div>
                
            </div>
            
        </div>
    </div>
    )
};

export default ProjectRequestForm;