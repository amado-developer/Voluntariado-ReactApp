import React, {useState} from 'react';
import omit from 'lodash/omit';
import {connect} from 'react-redux';
import ProjectDisplayer from '../project.displayer';
import * as selectors from '../../redux/reducers';
import {useHistory} from 'react-router-dom';
import Modal from './application.modal';
const AvailableProject = ({data, onSelect}) => {
    const [isModalShown, changeIsModalShown] = useState(false);
    const [selectedProject, changeSelectedProject] = useState(1);
   
    const history = useHistory();
    const {description, id} = data;
    
    const company = data.company_name;
    const project = data.project_name;

    const projectData = {
        id,
        description,
        company,
        project,
        isAdmin : false,
        onSelect,
        history,
    }
  

    return( 
        <div>
            {
                isModalShown? ( <Modal data={omit(data, id)} changeIsModalShown={changeIsModalShown} />) : (<></>)
            }
            <ProjectDisplayer data={projectData} changeIsModalShown={changeIsModalShown}/> 
        </div>

    
    );
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