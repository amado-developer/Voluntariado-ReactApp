import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/buttonClick';
import * as selectors from '../../redux/reducers';
const ClickOnButton = ({clicks, onClick}) => {
    return(
        <div>
            <p>
                {clicks}
            </p>
            <button onClick={() => onClick(clicks++)}>
                Click Me
            </button>
        </div>
       
    )
}

//mapStateToProps -> Getter del estado
//dispatchStateToProps -> Setter del estado

export default connect(
    state => ({
        clicks : selectors.getButtonClicks(state),
    }),
    dispatch => ({
        onClick(counter){
            dispatch(actions.ClickButton(counter))
        }
    }),
)(ClickOnButton);

