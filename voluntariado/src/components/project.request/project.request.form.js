import React, {useCallback, useState} from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/projectRequestForm.css';
import * as Selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/project.request';
import {uuid} from 'uuidv4';
import {connect} from 'react-redux';

import Header from '../header';
import Faculties from '../faculties.select/faculties';
import Majors from '../majors.select/majors';
import LabeledInputList from '../labeled.input/labeled.input.list';
import Tags from '../tags';
import ColoredBar from '../header/colored.bar';
import Modal from '../modal';

import whiteLogo from '../../images/white_logo.png'
import linkdInIcon from '../../images/linkedin_icon.png';
import facebookIcon from '../../images/facebook_icon.png';
import instagramIcon from '../../images/instagram_icon.png';
import webIcon from '../../images/web_icon.png';
import '../../styles/tags.css';
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

let link = [] //temporalmente lo dejaremos aqui
const ProjectRequestForm = ({onSubmitData, major, faculty, tags, onEmailSend}) => {

    const history = useHistory();
    const [isModalShown, changeIsModalShown] = useState(false);
    const [inputValues, changeInputValues] = useState([]);
    const [description, changeDescription] = useState('');
    const [requirements, changeRequirements] = useState('');    
    const [imageUpload, addImageUpload] = useState([0]);
    const [linkUpload, addLinkUpload] = useState([0]);
    const [images, changeImages] = useState([]);
    const [links, changeLinks] = useState([]);
    const [image, changeImage] = useState("");
    const [aboutUs, changeAboutUs] = useState('');


    const inputListValueChange = useCallback(
        (value) => {
            changeInputValues(c => value);
        },
        [changeInputValues]
    );

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
            <Header color={'#343434'} logo={whiteLogo}/>
            <ColoredBar color="#98C6DF" height="30px"/>
            {
                isModalShown ? (
                <Modal 
                body="¿Está seguro que desea cancelar?" changeIsModalShown={changeIsModalShown}/>) 
                : 
                (
                    <> 
                    
                    </>
                )
            }
            <h1 className="project__request__title">Solicitud de aprobacion de proyecto</h1>
            <div className="project_request_form">

                <div className="left_container">
        
                    <LabeledInputList values={inputListValueChange} />
                    <Faculties />
                    <Majors />
                    <Tags />
                </div>

                <div className="right_container">
                    <div className="description_requirements_containter">
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
                    </div>
                    <div className="upload__descriptions">
                        <div className="images__title">
                            <label>Imágenes</label>
                        </div>
                        <div className="icons__title">
                            <label>Enlaces</label>
                            <img src={linkdInIcon} height='25px' />
                            <img src={facebookIcon} height='25px' />
                            <img src={instagramIcon} height='25px' />
                            <img src={webIcon} height='25px' />
                        </div>
                    </div>

                    <div className="image_links_container">
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
                                            addImageUpload(imageUpload.filter(id => id !== upload));
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

                        <div className="project__links__container">
                            {
                                linkUpload.map(linkId => {
                                    return(
                                    <div key={linkId} className="upload__link__container" >
                                        <input  type='link' className="upload__link__input"
                                        value={link[linkId]}
                                        onChange={e => {
                                        
                                            link[linkId] = e.target.value;
                                            changeLinks([...links, e.target.value])
                                        }}
                                    />
                                        <p onClick={() => {
                                            if(linkUpload.length > 1){
                                                link[linkId] = ''
                                                addLinkUpload(linkUpload.filter(id => id !== linkId));
                                            }
                                        }} className="delete__link__field">{
                                            linkUpload.length > 1 ? ("X") : ("")
                                    }</p>
                                </div>
                                    )})}
                            <div>
                                <p onClick={() => {
                                    addLinkUpload([...linkUpload, linkUpload.length])
                                }} className="add__new__link">+ Subir más enlances</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__us__project__request">
                        <label className="about__us__lbl">
                            Acerca de la empresa
                        </label>
                        <textarea 
                        className="about__us__txtArea" 
                        value={aboutUs}
                        onChange={e => changeAboutUs(e.target.value) }
                        />
                    </div>
                    <div className="submit_request">
                        <button type="submit" className="submit_request_btn" onClick={ () => {
                            let tagList = '';
                            tags.map(tag => tagList += tag.tag + '  ');
                            // tagList = tagList.replace('  ', ',')
                            // onSubmitData(
                            // uuid(), 
                            // inputValues, 
                            // description, 
                            // requirements, 
                            // faculty, 
                            // major, 
                            // aboutUs, 
                            // images, 
                            // links,
                            // tagList,
                            // );
                            // const majors = [major];
                            onEmailSend(
                                major, inputValues[0], inputValues[4]
                            )
                            // setTimeout(() => {history.push('/login');}, 3000);
                            // notify(true)
                        }}>Enviar solicitud</button>

                        <button type="submit" className="cancel__request__btn"
                            onClick={() => {
                                changeIsModalShown(true);
                                // history.push("/login");
                            }}
                        >
                            Cancelar
                        </button>
                        
                    </div>
                        
                </div>  
                <div>
                        
                </div>
            </div>
    </div>
)};


export default connect(
    state =>({
        major: Selectors.getSelectedMajor(state),
        faculty: Selectors.getSelectedFaculty(state),
        form: Selectors.getForm(state),
        tags: Selectors.getTags(state),
    }),
    dispatch =>({
        onSubmitData(id, inputValues, description, requirements, faculty, major, aboutUs, images, links, tags){
            dispatch(actions.startPostProjectRequestForm(
                id, inputValues, description, requirements, faculty, major, aboutUs, images, links, tags));
        },
        onEmailSend(majors, company, projectName){
            dispatch(actions.startSendingRequestEmail(majors, company, projectName));
        }
    })
)(ProjectRequestForm);



















   // let error = inputValidation(companyName, phone, email, projectName, description, requirements);
                        // let isValid = true;

                        // for(let key in error){
                        //    if(!error[key]){
                        //        isValid = false;
                        //    }
                        // }
                        // if(isValid){
                           
                        //    
                        // }
                        // notify(isValid);
                     