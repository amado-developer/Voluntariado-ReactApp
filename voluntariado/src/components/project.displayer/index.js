import React from 'react';

const ProjectDisplayer = ({data}) => {
    const {description} = data;
    const company = data.company;
    const project = data.project;
    const isAdmin = data.isAdmin;

    return(
        <div className="pending__project__container">
            <div className="pending__project">
                <div className="pending__project__header">
                    <p className="pending__project__name">{project}</p>
                    {isAdmin ? <p className="pending__project__date">{data.isoDate}</p> : <></>}
                </div>
                <div className="pending__project__description">
                    <p className="pending__project__company">{company}</p>
                    <p>{description}</p>
                </div>
                {isAdmin ? (
                <div className="pending__project__buttoms">
                    <button onClick={e => data.onAccept(data.email, company, project)}> Aceptar</button>
                    <button onClick={e => data.onReject(data.email, company, project)} > Rechazar </button>
                    <button onClick={e => {
                        data.onSelect(); 
                        data.history.push("/project-request-detail");
                        }}>Ver mas
                    </button>
                </div>) : 
                (
                    <div className="pending__project__buttoms">
                        <button className="p">Ver Mas</button>
                    </div>
                )
                }
            </div>
        </div>
    )
};

export default ProjectDisplayer;