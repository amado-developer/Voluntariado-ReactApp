import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/projectRequest';
import * as Selectors from '../../redux/reducers';
import Faculty from './faculty';

const Faculties = ({faculties, onFacultyChange}) =>{
    return (
        <div>
            <label> Selecciona una facultad: </label>
                <select 
                    name="faculties"
                    id="faculties"
                    onChange={e => {
                        onFacultyChange(e.target.value);
                    }}>
                    <option disabled selected />{
                        faculties.length !== 0 ? (
                        faculties.map(({id}) => <Faculty id={id} key={id} />
                    )) : (<> </>)
                    }
            </select>
        </div>
    )
}

export default connect(
    state => ({
        faculties : Selectors.getFaculties(state),
    }),
    dispatch =>({
        onFacultyChange(faculty){
            dispatch(actions.startFetchingMajors(faculty));
            dispatch(actions.selectFaculty(faculty));
        }
    })
)(Faculties);