import React from "react";
import '../../styles/modal.css';

const Modal = ({body}) => (
      <div className="modal-wrapper">
        <div className="modal-backdrop">
          <div className="modal-box">
            <p class="close" />
            <div className="modal-body">
              <label>{body}</label>
            </div>
            <div className="modal-buttons">
              <button className="modal-green-button">Si</button> 
              <button className="modal-red-button">No</button>
            </div>
          </div>
        </div>
     </div>
);

export default Modal;
