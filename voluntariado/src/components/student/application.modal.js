import React, {useState} from 'react';
import '../../styles/project.application.modal.css';
import Apply from '../../images/apply.png';
const ApplicationModal = (data) =>{
    const emailAddress = data.data.email_address;
    const phoneNumber = data.data.phone_number;
    const companyAddress = data.data.company_address;
    const companyName = data.data.company_name;
    const aboutUs = data.data.about_us;
    const projectName = data.data.project_name;
    const {description, tags, requirements} = data.data;
    const tagsSpliter = tags.split('  ').map(e => '#' + e);
    const hashtags = tagsSpliter.toString().replace(/,/g, ' ');
    
    return(
    <div className="modal-wrapper">
        <div className="modal-backdrop">
            <div className="modal-student-box">
                <div>
                    <h2 className="company__name">{companyName}</h2>
                    <p className="company__description">{aboutUs}</p>
                </div>
               
                <div>
                    <h2>{projectName}</h2>
                    <p>{description}</p>
                </div>
                
                <h2>{hashtags}</h2>

                <h2>Requisitos</h2>
                <p>{requirements}</p>
                <div>
                    <h2>Contacto</h2>
                    <div>
                        <p>{companyAddress}</p>
                        <p>{phoneNumber}</p>
                        <p>{emailAddress}</p>
                    </div>
                </div>
                
                <img className="apply__image" src={Apply} />
            </div>
        </div> 
    </div>)
}

export default ApplicationModal;