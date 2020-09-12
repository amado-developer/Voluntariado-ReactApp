import React from 'react';
import {connect} from 'react-redux';
import ProjectDisplayer from '../project.displayer';
import * as selectors from '../../redux/reducers';
import {useHistory} from 'react-router-dom';
const AvailableProject = ({data, onSelect}) => {
    const history = useHistory();
    const {description} = data;
    const company = data.company_name;
    const project = data.project_name;

    const projectData = {
        description,
        company,
        project,
        isAdmin : false,
        onSelect,
        history,
    }
    return( <ProjectDisplayer data={projectData} />);
};

export default connect(
    (state, {index}) =>({
        data: selectors.getAvailableProject(state, index),
    }),
    (dispatch, {index}) =>({
        onSelect(){
            dispatch();
        }
    }),
)(AvailableProject);