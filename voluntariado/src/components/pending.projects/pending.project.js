import React from 'react';
import '../../styles/pending.project.css';
import {connect} from 'react-redux';
import * as actions from '../../redux/reducers';

const PendingProject = ({data}) => {
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
                    <button > Aceptar </button>
                    <button > Rechazar </button>
                </div>
            </div>
        </div>
    )
};

export default connect(
    (state, {index}) => ({
        data: actions.getProjectRequest(state, index)
    })
)
(PendingProject);