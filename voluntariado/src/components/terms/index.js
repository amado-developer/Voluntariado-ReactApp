import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../../styles/terms.css';
import * as projectRequestActions from '../../redux/actions/project.request';

const Terms = ({onClick}) => {
    const history = useHistory();
    return(
        <div className="terms__wrapper">
            <div className="terms__instructions__wrapper">
                <div className="instruccions__wrapper">
                    <label>Instrucciones</label>
                    <p>A continuación se les presentará un formulario requiriendo información relacionada a su empresa
                        y al proyecto en cuestión, por favor llene los campos obligatorios para poder tramitar su solicitud.
                    </p>
                    <p>
                        Luego de llenar los datos, debe enviarlos presionando la opción "Enviar Solicitud". 
                        Seguidamente este entrará a un proceso de revisión, verificación y aprobación, por parte
                        de las autoridades de la Universidad del Valle de Guatemala, las cuales se comunicarán con ustedes 
                        por las vías proveidas y posteriormente les será notificado a su correo electrónico cuando el trámite 
                        sea completado.
                    </p>
                </div>
                <div className="conditions__wrapper">
                    <label className="terms__lbl" >Términos y condiciones</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Aenean sit amet nunc varius, varius mauris eget, auctor erat.</p>
                    <p>Aenean eu dui eu tortor tristique euismod sit amet dictum felis.</p>
                </div>
                <div className="terms__instructions__btns">
                    <button type="submit" className = "terms__accept__btn"
                    onClick={() => {
                        onClick();
                        history.push("/project-request");
                    }}
                    >Aceptar</button>
                    <button type="submit" className = "terms__reject__btn"
                    onClick={
                        () => {
                            history.push("/login");
                        }
                    }
                    >Rechazar</button>
                </div>
            </div>
        </div>
)};

export default connect(
    undefined,
    dispatch =>({
        onClick(){
            dispatch(projectRequestActions.startFetchingFaculties());
        },
    })
)(Terms);