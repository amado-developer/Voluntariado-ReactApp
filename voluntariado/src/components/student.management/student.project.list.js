import React, {useState} from 'react';
import omit from 'lodash/omit';
import {connect} from 'react-redux';
import ProjectDisplayer from '../project.displayer';
import * as selectors from '../../redux/reducers';
import {useHistory} from 'react-router-dom';
import StudentManagerModal from '../modal.student.manager';
import * as actions from '../../redux/actions/project.request.approval';

const StudentProjectList = ({data, onSelect}) =>{
    const [isModalShown, changeIsModalShown] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const {description, id, tags, date} = data;
    const history = useHistory();
    const company = data.company_name;
    const project = data.project_name;


    const projectData = {
        id,
        description,
        company,
        project,
        history,
        tags,
        onSelect,
        isAcceptingProjects : false,
        isoDate: new Date(date).toLocaleDateString(),
        isAdmin: true,
    }

    return(
        <div>
             {
                isModalShown? ( <StudentManagerModal  changeIsModalShown={changeIsModalShown}  projectId={id}/>) : (<></>)
            }
            <ProjectDisplayer id={id} data={projectData} changeIsModalShown={changeIsModalShown}  />

        </div>
    )


}

export default connect(
    (state, {index}) =>({
        data: selectors.getAvailableProject(state, index),
    }),
)(StudentProjectList);