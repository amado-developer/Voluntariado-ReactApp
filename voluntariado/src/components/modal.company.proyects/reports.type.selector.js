import React from 'react';

const ReportSelector = ({changeSelectedId}) =>{
    return (
        <div>
            <label> Estado del reporte: </label>
                <select 
                    name="ProjectReportSelector"
                    id="projectReportSelector"
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

export default ReportSelector;