import React from 'react';
import {connect} from 'react-redux';
import * as Selectors from '../../redux/reducers';
import * as actions from '../../redux/actions/project.request';
import Major from './major';


const Majors = ({majors, onMajorSelected}) =>{
    return(
        <div>
            <label> Selecciona una carrera: </label>
                <select
                    name="majors"
                    id="majors"
                    onChange={ e =>{
                        console.log(e.target.value)
                        onMajorSelected(e.target.value)
                    }}
                >
                    <option disabled selected />
                        {
                            majors.length !== 0 ? (
                                majors.map(({id}) => <Major id={id} key={id} />)
                            ) : (<></>)
                    }
                </select>
        </div>
    )
}

export default connect(
    state => ({
        majors: Selectors.getMajors(state),
    }),
    dispatch => ({
        onMajorSelected(major){
            dispatch(actions.selectMajor(major))      
        }
    }),
)(Majors);