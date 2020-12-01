import React from 'react';
import {SERVER} from '../../config';
import Selector from './reports.type.selector';
import '../../styles/company.css';
import axios from 'axios';
import { toast } from 'react-toastify';
    toast.configure();
const Report = ({data, data_media})=>{
    const notify = valid =>{
        if(valid){
            toast.success('Reporte aprobado', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }else{
            toast.error('El reporte ha sido rechazado', {
                position:toast.POSITION.TOP_LEFT,
                className: 'toast__success',
                autoClose: 3000,
            })
        }  
    }
    const media  = data_media;
    console.log(data);
    const studentName = data.student_name;
    const studentPicture = data.student_picture;
    const date = new Date(data.date).toLocaleDateString();
    const {hours, description, id, state} = data;
    
    return(
    <div className="reports__container">
       
       <div className="report__info__container">
            <img src={`${SERVER}${studentPicture}`} alt="Tono el meco"/>
            <div>
                <p>{`Fecha: ${date}`} </p>
                <p>{`Estudiante: ${studentName}`} </p>
                <p>{`Horas trabajadas: ${hours}`}</p>
                <p>{description}</p>
                <div>
                    {
                        state === 'Pending' ? <div><button onClick={() => {
                            notify(true);
                            axios.patch(`http://localhost:8000/api/v1/student-report/accept-report/?id=${id}`);
                        }} className="accept__report__btn">Aceptar</button>
                        <button onClick={() => {
                            notify(false);
                            axios.patch(`http://localhost:8000/api/v1/student-report/reject-report/?id=${id}`);
                        }} className="reject__report__btn">Rechazar</button></div>
                        :
                        <></>
                    }
                    
                </div>
            </div>
        </div>
        <div>
            {
                media.media === undefined ? (media.map(file=><p className="media__files" onClick={ () => window.open(`${SERVER}${file.file}`, "_blank")}>{file.file.split("/")[2]}</p>))
                : media.media.map(file=><p className="media__files" onClick={ () => window.open(`${SERVER}${file.file}`, "_blank")}>{file.file.split("/")[2]}</p>)
            }
        </div>
    </div>
    );
};

export default Report;