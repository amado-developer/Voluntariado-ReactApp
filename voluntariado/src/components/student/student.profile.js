import React, {useState} from 'react';
import Tono from '../../images/Tono.jpg';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/authorization';
import '../../styles/student.profile.css';
import pdfIcon from '../../images/pdf.png';
import FileSaver from 'file-saver';

  async function asyncCall(setIsuploadButtonActive) {
    await setIsuploadButtonActive(false);
  }

const StudentProfile = ({user, onUpdate}) =>{
    const firstName = user.first_name;
    const lastName = user.last_name;
    const {id, major, email, cv} = user;
    const collegeID = user.college_id;
    const phoneNumber = user.phone_number;
    const [isUploadButtonActive, setIsuploadButtonActive] = useState(false);
    const [pdfCV, changepdfCV] = useState("");

    return(
        <div className="student-profile-wrapper">
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
                    {
                        isUploadButtonActive ?
                        <div className="upload-cv-wrapper">
                            <div className="upload-cv-input-image">
                                <img alt="pdf" src={pdfIcon} />
                                <input 
                                type="file" 
                                className="upload-cv-input-file"  
                                accept="files/*.pdf"
                                files={pdfCV}
                                onChange={e => {
                                    changepdfCV(e.target.files[0]);
                                }}
                                />
                            </div>
                            <div className="upload-cv-button">
                                <button onClick={() => 
                                    {
                                        onUpdate(id, pdfCV, setIsuploadButtonActive); 
                                    }} >Subir CV</button>
                            </div>
                        </div>
                        :
                        <div className="cv-name-wrapper">
                            {
                                cv !== undefined?  <p>CV: {
                                    cv.split("/").length > 1 ? cv.split("/")[4] : cv
                                    }</p> : <p>CV: </p>
                            }
                          
                            <div className="cv-buttons-wrapper">
                                <button onClick={() => setIsuploadButtonActive(true)}>Actualizar CV</button>
                                <button onClick={() => FileSaver.saveAs(cv, firstName + "_" + lastName + "_CV.pdf")}>
                                    Descargar CV
                                </button>
                            </div>
                        </div>
                    }     
                </div>
            </div>
        </div>
    )
};



export default connect(
    state=> ({
        user: selectors.getAuthUser(state), 
    }),
    dispatch => ({
        onUpdate(id, cv,setIsuploadButtonActive ){
            dispatch(actions.startUpdatingCV(id, cv, setIsuploadButtonActive));
          
        }
    }),
)
(StudentProfile);