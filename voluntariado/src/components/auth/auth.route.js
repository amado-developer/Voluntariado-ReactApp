import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as companyActions from '../../redux/actions/company';
import Company from '../company';

const AuthRoute = ({ user, userType, component: Component, ...rest}) => {
  const{is_staff} = user;
  
  return (
    <Route
      {...rest}
      render={props => {
        if(userType === 'UVG'){
          if(is_staff){
            const AdminComponent = Component[0];
            return <AdminComponent {...props} />;
          }else{
            const UserComponent = Component[1];
            return <UserComponent {...props} />;
          }
        }else{
          return <Company />;
        }
        
      }}
    />
  );
};

export default connect(
  state => ({
    user : selectors.getAuthUser(state),
    userType: selectors.getUserType(state),
  }),
  dispatch=> ({
   
  })
)(AuthRoute);