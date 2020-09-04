import React from 'react';
import '../../styles/pending.project.css';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/project.request.approval';
import {useHistory} from 'react-router-dom';

const PendingProject = ({data, onAccept, onReject, onSelect}) => {
    const history = useHistory();
    const {date, description} = data;
    const isoDate = new Date(date).toLocaleDateString()

    const company = data.company_name;
    const project = data.project_name;

    return(
        <div className="pending__project__container">
            <div className="pending__project">
                <div className="pending__project__header">
                    <p className="pending__project__name">{project}</p>
                    <p className="pending__project__date">{isoDate}</p>
                </div>
                <div className="pending__project__description">
                    <p className="pending__project__company">{company}</p>
                    <p>{description}</p>
                </div>
                <div className="pending__project__buttoms">
                    <button onClick={() => onAccept()} > Aceptar </button>
                    <button onClick={() => onReject()}> Rechazar </button>
                    <button onClick={() => { onSelect(); history.push("/project-request-detail");}}>Ver mas</button>
                </div>
            </div>
        </div>
    )
};

export default connect(
    (state, {index}) => ({
        data: selectors.getProjectRequest(state, index)
    }),
    (dispatch, {index}) =>({
        onAccept(){
            dispatch(actions.startApprovingProjectRequest(index))
        },
        onReject(){
            dispatch(actions.startRejectingProjectRequest(index))
        },
        
        onSelect(){
            dispatch(actions.selectProjectRequest(index));
            dispatch(actions.startFetchingProjectRequestImages(index));
            dispatch(actions.startFetchingProjectRequestLinks(index));
        }
    })
)
(PendingProject);