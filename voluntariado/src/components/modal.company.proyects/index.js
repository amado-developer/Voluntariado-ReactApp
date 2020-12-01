import React, {useState} from 'react';
import Selector from './reports.type.selector';
import Report from './report';
import Company from '../../styles/company.css';
const ModalCompanyProjects = ({changeIsModalShown, data, data_media}) => {
    const [selectedId, changeSelectedId] = useState(1);
    let pendingReports  = [];
    let acceptedReports = [];
    let rejectedReports = [];
    let data_media_array = [];
    
    data.map(report =>{
        if(report.state === 'Pending'){
            pendingReports = [...pendingReports, report];
        }else if(report.state  === 'Accepted'){
            acceptedReports = [...acceptedReports, report];
        }else if(report.state === 'Rejected'){
            rejectedReports = [...rejectedReports, report];
        }
    });
    let currentId = 0;

    function handleClick(e, isShown) {
        e.stopPropagation();
        changeIsModalShown(isShown); 
      }
    return(
        <div className='modal-wrapper'>
            <div className="modal-backdrop" onClick={e => handleClick(e, false)} >
                <div className="modal-student-box" onClick={e => handleClick(e, true)}>
                    <p className="close" onClick={e => handleClick(e, false)} />
                    <div className='modal-tittle'>
                        <h3>Listado de Reportes</h3>
                    </div>
                    <Selector changeSelectedId={changeSelectedId}/>
                    <div className="project__reports">
                        {
                            selectedId === 1 ? (pendingReports.length > 0 ? (
                                pendingReports.map(report =>{
                                    data_media.map(media => {
            
                                        if(media.media[0].student_report_id === report.id){
                                            data_media_array = media.media;
                                            return;
                                        }
                                    })
                                    return (<Report data = {report} data_media={data_media_array} />)
                                })
                            ) : <h2>No hay reportes pendientes</h2>) : <></>
                          
                        }

                        {
                              selectedId === 2 ? (acceptedReports.length > 0 ? (
                                acceptedReports.map(report =>{
                                    currentId++;
                                    return (<Report data = {report} data_media={data_media[currentId - 1]} />);
                                })
                            ) : <h2>No hay reportes aceptados</h2>) : <></>
                        }
                        {
                                selectedId === 3 ? (rejectedReports.length > 0 ? (
                                    rejectedReports.map(report =>{
                                        currentId++;
                                        return (<Report data = {report} data_media={data_media[currentId - 1]} />);
                                    })
                                ) : <h2>No hay reportes rechazados</h2>) : <></>
                        }
                    </div>
            </div>
        </div>
    </div>
    )
};

export default ModalCompanyProjects;