import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/authForm.css';
import {connect} from 'react-redux';
import * as projectRequestActions from '../../redux/actions/projectRequest';
import * as authActions from '../../redux/actions/authorization';

const AuthForm = ({onClick, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
    <div className="auth_form_container">
        <div className="email_container">
            <label className="email_label">Correo Electrónico</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" className='email_input' />
        </div>
        <div className="password_container">
            <label className="password_label">Contraseña</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="password_input" />
        </div>
        <div className="submit_container">
            <button type="submit" onClick={() => onSubmit(email, password)} className="submit_btn">
                Iniciar
            </button>
            <Link to="/project-request"><p className="contacto" onClick={() => onClick()}>
                ¿Estás interesado en colaborar con nosotros? Contáctanos
            </p></Link>
        </div>
    </div>
    )};

export default connect(
    undefined,
    dispatch =>({
        onClick(){
            dispatch(projectRequestActions.startFetchingFaculties());
        },

        onSubmit(email, password){
            dispatch(authActions.startLogin(email, password));
        }
    })
)(AuthForm);

