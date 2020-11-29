import React, {useEffect} from 'react';
import * as actions from '../../redux/actions/available.projects';
import * as projectEnrollmentActions from '../../redux/actions/project.enrollment';
import * as selectors from '../../redux/reducers';
import Home from './home';
import {connect} from 'react-redux';
const Student = ({onLoad,onCheckStudentEnrollment, userId, userType}) =>{
    useEffect(() => {
        onLoad();
        onCheckStudentEnrollment(userId);
    });
    return (
        <Home />
    )
}
export default connect(
    state => ({
        userId: selectors.getAuthUserID(state),
        userType: selectors.getUserType(state),
    }),
    dispatch =>({
        onLoad(){
            dispatch(actions.startFetchingAvailableProjects());
            dispatch(actions.startFetchingRecommendedProjects());
        },
        onCheckStudentEnrollment(studentId){
            dispatch(projectEnrollmentActions.startFetchingProjectEnrollment(studentId));
        }
    }),
)(Student);