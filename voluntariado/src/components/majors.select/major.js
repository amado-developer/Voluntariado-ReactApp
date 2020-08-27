import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';

const Major = ({major}) =>{ 
    return(
    <option>{major.major}</option>
)};

export default connect(
    (state, {id}) =>({
        major : selectors.getMajor(state, id)
    })
)(Major);
