import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/student.report';
import * as selectors from '../../redux/reducers';
import "../../styles/student.report.css";
import { toast } from 'react-toastify';
toast.configure();

const StudentReport = ({studentId, projectStatus, onSubmit}) =>{
    const [description, setDescription] = useState("");
    const [files, changeFiles] = useState([]);
    const [filesName, changeFilesName] = useState([]);
    const [hours, changeHours] = useState(0);
    const projectId = projectStatus.project_id;

    const notify = () =>
            toast.success('Reporte enviado con exito', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
    

    return(
        <div className="report__container">
            <h1>Generar Reporte</h1>
            <div className="hours__worked__container">
                <label className="hours_lbl">Horas Invertidas:</label>
                <input 
                className="hours__worked__input"
                type="number"
                value = {hours}
                onChange={e => {changeHours(e.target.value)}}
                />
            </div>
            <div className="report__description__container">
                <label className="description_lbl">Descripción de actividades</label>
                <textarea 
                className="description"
                    type="text" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className="files__documents__container">
                <label className="files__documents__lbl">Archivos y documentos</label>
                <div className="files__upload__container">
                    {files.map(file =>{
                        return(
                        <div className="filesName__container">
                            <p className="fileName__p">{file.name}</p>
                            <p className="fileName__delete" onClick={() => {
                                changeFiles(files.filter(f=> f != file));
                                changeFilesName(filesName.filter(f=> f != file.name))
                            }}>X</p>
                        </div>
                    )})}
                    <label className="custom-file-upload">
                        <input 
                        className="upload__files__input"
                        type='file'
                        files={files}
                        onChange={e => {
                            changeFiles([...files, e.target.files[0]]);
                            changeFilesName([...filesName, e.target.files[0].name]);
                        }}
                        ></input>
                        {'Adjuntar...'}
                    </label>
                </div>
            </div>
            <div className="btn__container">
                <button type="submit" onClick={() => {
                    onSubmit(hours, description, files, studentId, projectId);
                    notify();

                    }
                    }> Enviar Reporte </button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        studentId : selectors.getAuthUserID(state),
        projectStatus: selectors.getProjectEnrollmentStatus(state),
    }),
    dispatch =>({
        onSubmit(hours, description, files, studentId, projectId){
            dispatch(actions.startPostingStudentReport(hours, description, files, studentId, projectId));
        }
    })
)(StudentReport);