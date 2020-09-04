import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../styles/authForm.css';
import {connect} from 'react-redux';
import * as authActions from '../../redux/actions/authorization';

const AuthForm = ({onSubmit}) => {
    const history = useHistory();
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
            <button type="submit" onClick={() => {onSubmit(email, password);  history.push('/')}} className="submit_btn">
                Iniciar
            </button>
            <Link to="/terms"><p className="contacto">
                ¿Estás interesado en colaborar con nosotros? Contáctanos
            </p></Link>
        </div>
    </div>
    )};

export default connect(
    undefined,
    dispatch =>({
        onSubmit(email, password){
            dispatch(authActions.startLogin(email, password));
        }
    })
)(AuthForm);

