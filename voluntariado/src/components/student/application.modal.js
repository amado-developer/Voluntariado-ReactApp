import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import '../../styles/project.application.modal.css';
import Apply from '../../images/apply.png';
import Axios from 'axios';
import {API_BASE_URL} from '../../Config';
import { toast } from 'react-toastify';
import { times } from 'lodash';
import * as actions from '../../redux/actions/available.projects';
const ApplicationModal = ({data, changeIsModalShown, token, userId, onApply}) =>{
    const emailAddress = data.email_address;
    const phoneNumber = data.phone_number;
    const companyAddress = data.company_address;
    const companyName = data.company_name;
    const aboutUs = data.about_us;
    const projectName = data.project_name;
    const {description, tags, requirements, id} = data;
    const tagsSpliter = tags.split('  ').map(e => '#' + e);
    const hashtags = tagsSpliter.toString().replace(/,/g, ' ');


    const notify = valid =>{
        if(valid){
            toast.success('Solicitud enviada con exito', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 2000,
            })
        }else{
            toast.error('Error, verifique los campos', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }  
    }

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
         
        notify(true);
        handleClick(e, false);
        onApply(id);
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
                
                <img className="apply__image" src={Apply} onClick={e => {
                    sendApplication(e);
                    }}/>
            </div>
        </div> 
    </div>)
}

export default connect(
    state => ({
        token: selectors.getAuthToken(state),
        userId: selectors.getAuthUserID(state),
    }),
    dispatch =>({
        onApply(id){
            dispatch(actions.applyToProject(id));
        }
    })
)
(ApplicationModal);