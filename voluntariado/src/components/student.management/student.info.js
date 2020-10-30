import React,{useState} from 'react';
import '../../styles/studentManagerDisplayer.css'
import '../../styles/student.manager.modal.css'

const StudentInfo = ({}) =>{
    

    return(
        <div className='student_container'>
            <div className ='student'>
                <h1>Nombre</h1>
                <h1>Carnet</h1>
                <h1>Celular</h1>
                <h1>Correo</h1>
                
                <div className='buttons_container'>
                    <button className='accept_button'> Aceptar</button>
                    <button className='reject_button'> Rechazar</button>
                </div>

            </div>

        </div>
    )

}

export default StudentInfo;