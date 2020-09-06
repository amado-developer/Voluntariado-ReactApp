import React from "react";
import {useHistory} from 'react-router-dom';
import '../../styles/modal.css';


const Modal = ({body, changeIsModalShown}) => {
  const history = useHistory();
  function handleClick(e, isShown) {
    e.stopPropagation();
    changeIsModalShown(isShown); 
  }
  return(
      <div className="modal-wrapper" >
        <div className="modal-backdrop" onClick={e => handleClick(e, false)} >
          <div className="modal-box" onClick={e => handleClick(e, true)}>
            <p className="close" onClick={e => handleClick(e, false)} />
            <div className="modal-body">
              <label>{body}</label>
            </div>
            <div className="modal-buttons">
              <button className="modal-green-button" onClick={() =>history.push("/login") }>Si</button> 
              <button className="modal-red-button" onClick={e => handleClick(e, false)}>No</button>
            </div>
          </div>
        </div>
     </div>
)};

export default Modal;
