import React, {useCallback, useState}from 'react';
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {useDropzone} from 'react-dropzone'
import '../../styles/projectRequestForm.css';
import axios from 'axios';
import {v4} from 'uuid';
import {API_BASE_URL} from '../../Config';

import Header from '../header';
import DragNDrop from '../dragndrop';

const post = (company_name, phone_number, email_address, project_name, description, requirements, pictures='') => {
    const form_data = new FormData();
    form_data.append('company_name', company_name);
    form_data.append('phone_number', phone_number);
    form_data.append('project_name', project_name);
    form_data.append('description', description);
    form_data.append('requirements', requirements);
    form_data.append('email_address', email_address);

    axios.post(`${API_BASE_URL}/solicitud-proyecto/`, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
    })
    postImages(pictures);
};


async function postImages(pictures){
    const images_data = new FormData();
    if(pictures.length > 0){
        pictures.map(picture => images_data.append('image', picture))
        await axios.post(`${API_BASE_URL}/project-images/save-images/`, images_data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
    }
};

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
    const [companyName, changeCompanyName] = useState('');
    const [phone, changePhone] = useState('');
    const [email, changeEmail] = useState('');
    const [projectName, changeProjectName] = useState('');
    const [description, changeDescription] = useState('');
    const [requirements, changeRequirements] = useState('');    
    const [imageUpload, addImageUpload] = useState([0]);
    const [images, changeImages] = useState([]);
    const [image, changeImage] = useState("")

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
                    {
                    imageUpload.map(upload => {
                        return(
                        <div key={upload} className="upload__image__container" >
                            <input  type='file' className="upload__file__input" className="filepicker" accept="image/*"
                            files={image}
                            onChange={e => {
                                changeImage(e.target.files[0])
                                changeImages([...images, e.target.files[0]])
                            }}
                            />
                            <p onClick={() => {
                                if(imageUpload.length > 1){
                                    addImageUpload(imageUpload.filter(id => id != upload));
                                }
                            }} className="delete__upload__file">{
                                imageUpload.length > 1 ? ("X") : ("")
                            }</p>
                        </div>
                    )})}
                    <div>
                        <p onClick={() => {
                            addImageUpload([...imageUpload, imageUpload.length])
                        }} className="add__new__image">+ Subir más Imagenes</p>
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
                        // console.log(error);
                        if(isValid){
                            post(companyName, phone, email, projectName, description, requirements, images)
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