import React from 'react';
import '../../styles/authForm.css';
const authForm = () => (
    <div className="auth_form_container">
       
        <div className="email_container">
            <label className="email_label">Correo Electrónico</label>
            <input type="text" className='email_input' />
        </div>
        <div className="password_container">
            <label className="password_label">Contraseña</label>
            <input type="password" className="password_input" />
        </div>
        <div className="submit_container">
            <button type="submit" className="submit_btn">
                Iniciar
            </button>
            <a href="#" className="contacto">
                ¿Estás interesado en colaborar con nosotros? Contáctanos
            </a>
        </div>
    </div>
);
export default authForm;

