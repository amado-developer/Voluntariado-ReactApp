import React from 'react';
import '../../styles/projectRequestApproval.css';
const ProjectRequestApproval = (projectRequest) =>{
    const {company_name, project_name, description, requirements, phone_number, email_address, picture} = projectRequest.projectRequest;
    console.log(projectRequest)
    return (
        <div className="project__request__approval__container">
            <ul>
                <p>{'Nombre de la empresa: ' + company_name}</p>
                <p>{'Correo Electronico: ' + email_address}</p>
                <p>{'Telefono: ' + phone_number}</p>
                <p>{'Nombre del proyecto: ' + project_name}</p>
                <p>{'Descricion del proyecto: ' + description}</p>
                <p>{'Requisitos: ' + requirements}</p>
                <p>{'Imagen del proyecto: ' + picture}</p>
                <p><button>Aprobar</button></p>
                <p><button>Rechazar</button></p>
            </ul>
        </div>
    )
};

export default ProjectRequestApproval;