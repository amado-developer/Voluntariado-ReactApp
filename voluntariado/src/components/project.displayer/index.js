import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/student.manager';
import * as reportsActions from '../../redux/actions/company';
const ProjectDisplayer = ({
    data, 
    isCompany = false, 
    changeIsModalShown, 
    fetchStudents, 
    fetchProjectReports,
    fetchProjectReportsMedia
}) => {
    const {description, tags, isAcceptingProjects, id, phone} = data;
    const company = data.company;
    const project = data.project;
    const isAdmin = data.isAdmin;

    const tagsSpliter = tags.split('  ').map(e => '#' + e);
    const hashtags = tagsSpliter.toString().replace(/,/g, ' ');

    return(
        <div className="pending__project__container">
            <div className="pending__project">
                <div className="pending__project__header">
                    <p className="pending__project__name">{project}</p>
                    <p>{hashtags}</p>
                    {isAdmin ? <p className="pending__project__date">{data.isoDate}</p> : <></>}
                </div>
                <div className="pending__project__description">
                    <p className="pending__project__company">{company}</p>
                    <p>{description}</p>
                </div>
                {isAdmin && isAcceptingProjects? (
                <div className="pending__project__buttoms">
                    
                    <button onClick={e => data.onAccept(data.email, company, project, phone, description)}> Aceptar</button>
                    <button onClick={e => data.onReject(data.email, company, project)} > Rechazar </button>
                    <button onClick={e => {
                        data.onSelect(); 
                        data.history.push("/project-request-detail");
                        }}>Ver mas
                    </button>
                </div>) : 
                (
                    !isCompany ? 
                    <div className="pending__project__buttoms">
                        <button className="p" onClick={() => {
                            fetchStudents(id);
                            changeIsModalShown(true);
                        }}>Ver Mas</button>
                    </div>
                    :
                    <div className="pending__project__buttoms">
                        <button className="p" onClick={() => {
                            fetchProjectReports(id);
                            fetchProjectReportsMedia(id);
                            changeIsModalShown(true);
                        }}>Ver reportes</button>
                    </div>
                )
                }
            </div>
        </div>
    )
};

export default connect(
    undefined,
    dispatch => ({
        fetchStudents(projectId){
            dispatch(actions.startFetchingStudentManager(projectId))
        },
        fetchProjectReports(projectId){
            dispatch(reportsActions.startFetchingProjectReports(projectId))
        },
        fetchProjectReportsMedia(projectId){
            dispatch(reportsActions.startFetchingProjectReportsMedia(projectId))
        }
    })
)(ProjectDisplayer);