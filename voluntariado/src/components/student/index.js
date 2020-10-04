import React, {useEffect} from 'react';
import * as actions from '../../redux/actions/available.projects';
import Home from './home';
import {connect} from 'react-redux';
const Student = ({onLoad}) =>{
    useEffect(() => {
        onLoad();
    });
    return (
        <Home />
    )
}
export default connect(
    undefined,
    dispatch =>({
        onLoad(){
            dispatch(actions.startFetchingAvailableProjects());
            dispatch(actions.startFetchingRecommendedProjects());
        }
    }),
)(Student);