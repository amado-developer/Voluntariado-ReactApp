import React from 'react';
import '../../styles/pending.project.css';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/project.request.approval';
import {useHistory} from 'react-router-dom';
import ProjectDisplayer from '../project.displayer';
const PendingProject = ({data, onAccept, onReject, onSelect}) => {
    const history = useHistory();
    const {date, description} = data;
    const isoDate = new Date(date).toLocaleDateString()

    const company = data.company_name;
    const project = data.project_name;
    const email = data.email_address;

    const projectData = {
        description,
        company,
        project,
        isoDate,
        email,
        isAdmin : true,
        onAccept,
        onReject,
        onSelect,
        history,
    }
    return(
        <ProjectDisplayer data={projectData}  />
    )
};

export default connect(
    (state, {index}) => ({
        data: selectors.getProjectRequest(state, index)
    }),
    (dispatch, {index}) =>({
        onAccept(email, company, project){
            dispatch(actions.startApprovingProjectRequest(index, email, company, project));
        },
        onReject(email, company, project){
            dispatch(actions.startRejectingProjectRequest(index, email, company, project));
        },
        onSelect(){
            dispatch(actions.selectProjectRequest(index));
            dispatch(actions.startFetchingProjectRequestImages(index));
            dispatch(actions.startFetchingProjectRequestLinks(index));
        }
    })
)
(PendingProject);