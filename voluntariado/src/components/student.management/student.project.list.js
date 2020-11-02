import React, {useState} from 'react';
import omit from 'lodash/omit';
import {connect} from 'react-redux';
import StudentManagerDisplayer from './student.manager.displayer'
import * as selectors from '../../redux/reducers';
import {useHistory} from 'react-router-dom';
import StudentManagerModal from '../modal.student.manager';

const StudentProjectList = ({data, onSelect}) =>{
    const [isModalShown, changeIsModalShown] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const {description, id} = data;
    const history = useHistory();
    const company = data.company_name;
    const project = data.project_name;

    
    const projectData = {
        id,
        description,
        company,
        project,
        onSelect,
        history,
    }

    return(
        <div>
             {
                isModalShown? ( <StudentManagerModal  changeIsModalShown={changeIsModalShown}  projectId={id}/>) : (<></>)
            }
            <StudentManagerDisplayer data={projectData} changeIsModalShown={changeIsModalShown}  />

        </div>
    )


}

export default connect(
    (state, {index}) =>({
        data: selectors.getAvailableProject(state, index),
    }),
    (dispatch, {index}) =>({
        onSelect(){
            dispatch();
        }
    }),
)(StudentProjectList);