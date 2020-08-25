import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/tags';
import '../../styles/tags.css';

const Tag = ({tag, onTagDeleted}) =>{
    return(
        <div className="tag__container">
            <button type="button" onClick={() => onTagDeleted(tag.id)}>{tag.tag}</button>
        </div>                 
   
    )
};

export default connect(
    undefined,
    dispatch => ({
        onTagDeleted(id){
           dispatch(actions.removeTag(id));
        }
    }),
)(Tag);