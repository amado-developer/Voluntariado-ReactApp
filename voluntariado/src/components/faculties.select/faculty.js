import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
const Faculty = ({faculty}) =>{ 
    return(
    <option>{faculty.faculty}</option>
)};

export default connect(
    (state, {id}) =>({
        faculty : selectors.getFaculty(state, id)
    }),
)(Faculty);

