import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import '../../styles/project.application.modal.css';
import Apply from '../../images/apply.png';
import Axios from 'axios';
import {API_BASE_URL} from '../../config';
 
const ApplicationModal = ({data, changeIsModalShown, token, userId}) =>{
    const emailAddress = data.email_address;
    const phoneNumber = data.phone_number;
    const companyAddress = data.company_address;
    const companyName = data.company_name;
    const aboutUs = data.about_us;
    const projectName = data.project_name;
    const {description, tags, requirements, id} = data;
    const tagsSpliter = tags.split('  ').map(e => '#' + e);
    const hashtags = tagsSpliter.toString().replace(/,/g, ' ');

    function handleClick(e, isShown) {
        e.stopPropagation();
        changeIsModalShown(isShown); 
    }

    async function sendApplication(e){
        Axios.post(`${API_BASE_URL}/project-applications/`, {project_id: id, student_id : userId, major_id: 1}, {
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json',
            }
        });
    }

    return(
    <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={e => handleClick(e, false)}>
            <div className="modal-student-box" onClick={e => handleClick(e, true)}>
                <p className="close" onClick={e => handleClick(e, false)} />
                <div>
                    <h2 className="company__name">{companyName}</h2>
                    <p className="company__description">{aboutUs}</p>
                </div>
               
                <div>
                    <h2>{projectName}</h2>
                    <h3>{hashtags}</h3>
                    <p>{description}</p>
                </div>
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
                
                <img className="apply__image" src={Apply} onClick={e => sendApplication(e)}/>
            </div>
        </div> 
    </div>)
}

export default connect(
    state => ({
        token: selectors.getAuthToken(state),
        userId: selectors.getAuthUserID(state),
    }),
)
(ApplicationModal);