import React, {useCallback, useState}from 'react';
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useDropzone} from 'react-dropzone'
import '../../styles/projectRequestForm.css';
import Header from '../header';
import axios from 'axios';

const url = `http://localhost:8000/api/v1/solicitud-proyecto/`;
const post = (company_name, phone_number, email_address, project_name, description, requirements, picture='') => {
    // const data = {
    //    company_name,
    //    phone_number,
    //    email_address,
    //    project_name,
    //    description,
    //    requirements,
    //    picture
    // }   

    const form_data = new FormData();

    if(picture !== ''){
        form_data.append('picture', picture, picture.name);
    }

    form_data.append('company_name', company_name);
    form_data.append('phone_number', phone_number);
    form_data.append('project_name', project_name);
    form_data.append('description', description);
    form_data.append('requirements', requirements);
    form_data.append('email_address', email_address);

    axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
    })
    
}
toast.configure()

const inputValidation = (companyName='', phone='', email='', projectName='', description='', requirements='') => {
    return{
        'companyName': companyName !== '',
        'phone' : phone !== '',
        'email': email !== '' && email.includes("@"),
        'projectName': projectName !== '',
        'description': description !== '',
        'requirements': requirements !== '',
    }
};

const ProjectRequestForm = () => {
    const history = useHistory();
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
      
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
              const binaryStr = reader.result
              console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
            changeImage(file)
          })
        
      }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});
    const [companyName, changeCompanyName] = useState('');
    const [phone, changePhone] = useState('');
    const [email, changeEmail] = useState('');
    const [projectName, changeProjectName] = useState('');
    const [description, changeDescription] = useState('');
    const [requirements, changeRequirements] = useState('');
    const [image, changeImage] = useState('');

    const notify = valid =>{
        if(valid){
            toast.success('Solicitud enviada con exito', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }else{
            toast.error('Error, verifique los campos', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }  
    }

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
                                image === '' ? 
                                <div className="drag__zone__components">
                                    <p>Arrastre la imagen aqui o</p> 
                                    <button className="upload__btn">Presione para subir imagen</button>
                                </div>
                                :
                                <img src={URL.createObjectURL(image)} className="dragged__picture"></img>
                            }
                    </div>
                </div>
                <div className="submit_request">
                    <button type="submit" className="submit_request_btn" onClick={ () => {
              
                        let error = inputValidation(companyName, phone, email, projectName, description, requirements);
                        let isValid = true;

                        for(let key in error){
                           if(!error[key]){
                               isValid = false;
                           }
                        }
                        console.log(error);
                        if(isValid){
                            post(companyName, phone, email, projectName, description, requirements, image)
                            setTimeout(() => {history.push('/');}, 3000);
                        }
                        notify(isValid);
                     
                    }}>Enviar solicitud</button>
                </div>
                
            </div>
            
        </div>
    </div>
    )
};

export default ProjectRequestForm;