import React, {useEffect, useState} from 'react';
import * as actions from '../../redux/actions/company';
import * as selectors from '../../redux/reducers';
import {connect} from 'react-redux';
import Modal from '../modal.company.proyects';
import ProjectDisplayer from '../project.displayer';

const ActiveProjects = ({onLoad, projects, reports, media, email}) => {
    const[isModalShown, changeIsModalShown] = useState(false);
    useEffect(() => {
        async function fetchData() {
          await onLoad(email);
        }
        fetchData();
      }, []);
 
    return(
    <div>
        {projects.map(project => {
            return <ProjectDisplayer data={{
                company: project.company_name,
                description: project.description,
                tags: project.tags,
                isAcceptingProjects: true,
                id : project.id,
                phone: project.phone_number,
                project: project.project_name,
                isAdmin: false,
            }} 
                isCompany = {true} 
                changeIsModalShown = {changeIsModalShown}
            />
        })}
        {
            isModalShown ? <Modal 
            changeIsModalShown={changeIsModalShown} 
            data = {reports}
            data_media = {media}
            /> : <></>
        }
    </div>
    )
};

export default connect(
    state => ({
        projects : selectors.getCompanyProjects(state),
        reports : selectors.getCompanyProjectReports(state),
        media: selectors.getCompanyProjectReportsMedia(state),
    }),
    dispatch => ({
        onLoad(email){
            dispatch(actions.startFetchingCompanyProjects(email));
        }
    })
)(ActiveProjects);