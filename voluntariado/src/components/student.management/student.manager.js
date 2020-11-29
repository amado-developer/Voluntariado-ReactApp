import React, {useEffect} from 'react';
import * as actions from '../../redux/actions/available.projects';
import {connect} from 'react-redux';
import ProjectList from './projects.list'

const StudentManager = ({onLoad}) =>{
    useEffect(() => {
        onLoad();
    });
    return (
        <ProjectList />
    )
}
export default connect(
    undefined,
    dispatch =>({
        onLoad(){
            dispatch(actions.startFetchingAvailableProjects());
        }
    }),
)(StudentManager);