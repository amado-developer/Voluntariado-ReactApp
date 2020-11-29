import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../styles/authForm.css';
import {connect} from 'react-redux';
import * as authActions from '../../redux/actions/authorization';
import * as companyActions from '../../redux/actions/company';
const AuthForm = ({onSubmit, onChangeUserType}) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFromCollege, setIsFromCollege] = useState(true);
    let type = 'UVG';
    if(!isFromCollege){
        type = 'Empresa';
    }
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
        <div className="change__user__type__container"> 
            <p>
                {isFromCollege ? 'Usuario de la UVG' : 'Organizaciones'}
            </p>
            <label class="switch">
                <input type="checkbox" onClick={() => {
                    setIsFromCollege(!isFromCollege);
                    if(isFromCollege){
                        onChangeUserType('Empresa')
                    }else{
                        onChangeUserType('UVG')
                    }
                   
                    }} />
                <span class="slider round"></span>
            </label>
        </div>
        <div className="submit_container">
            <button type="submit" onClick={() => {onSubmit(email, password, type );  history.push('/')}} className="submit_btn">
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
        onSubmit(email, password, userType){
            if(userType === 'UVG')
            {
                dispatch(authActions.startLogin(email, password));
            }else{
                dispatch(companyActions.startFetchingCompanies(email));
            }
           
        },
        onChangeUserType(type='UVG'){
            dispatch(authActions.changeUserType(type));
        }
    })
)(AuthForm);

