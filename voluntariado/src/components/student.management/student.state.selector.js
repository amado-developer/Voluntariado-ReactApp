import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/project.request';
import * as Selectors from '../../redux/reducers';

const StudentStateSelector = ({changeSelectedId}) =>{
    return (
        <div>
            <label> Estado del estudiante: </label>
                <select 
                    name="StudentStateSelector"
                    id="studentStateSelector"
                    onChange={e => {
                        changeSelectedId(e.target.selectedIndex + 1);
                    }}>
                    <option>Pendiente</option>
                    <option>Aceptado</option>
                    <option>Rechazado</option>
            </select>
        </div>
    )
}

export default StudentStateSelector;