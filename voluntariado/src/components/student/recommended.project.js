import React, {useState} from 'react';
import {connect} from 'react-redux';
import ProjectDisplayer from '../project.displayer';
import * as selectors from '../../redux/reducers';
import {useHistory} from 'react-router-dom';
import Modal from './application.modal';
import omit from 'lodash/omit';
const RecommendedProject = ({data, onSelect}) => {
    const history = useHistory();
    const [isModalShown, changeIsModalShown] = useState(false);
    const {description, tags, id} = data;
    const company = data.company_name;
    const project = data.project_name;

    const projectData = {
        id,
        description,
        company,
        tags,
        project,
        isAdmin : false,
        onSelect,
        history,
    }

    return ( 
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
        data: selectors.getRecommendedProject(state, index),
    }),
    (dispatch, {index}) =>({
        onSelect(){
            dispatch();
        }
    }),
)(RecommendedProject);