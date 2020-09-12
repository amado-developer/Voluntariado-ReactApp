import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/project.request';

const AuthRoute = ({ user, component: Component, ...rest}) => {
  const{is_staff} = user;
  return (
    <Route
      {...rest}
      render={props => {
        if(is_staff){
          const AdminComponent = Component[0];
          return <AdminComponent {...props} />;
        }else{
          const UserComponent = Component[1];
          return <UserComponent {...props} />;
        }
      }}
    />
  );
};

export default connect(
  state => ({
    user : selectors.getAuthUser(state),
  }),
  dispatch => ({
    getProjectRequests(){
      // dispatch(actions.star)
    }
  })
)(AuthRoute);