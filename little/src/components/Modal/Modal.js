import React, { useState } from "react";
import "./Modal.css";
import { tables } from "../../Data";
//import classNames from "classnames";

const Modal = ({ showModal, setShowModal }) => {
  const [userCount, setUserCount] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);

  // Verifica si showModal es true para mostrar el modal
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="content">
        <div className="header">
          <h2>Make a Reservation</h2>
          <div onClick={() => setShowModal(false)} className="close-modal">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="body">
          <h3 className="title">Personal Information</h3>
          <div className="form">
            <div className="form-group">
              <div className="form-item">
                <input type="text" name="name" id="name" placeholder="Name & Surname" />
                <label htmlFor="name">
                  <i className="far fa-user"></i>
                </label>
              </div>
              <div className="form-item">
                <input type="text" name="mail" id="mail" placeholder="Email Adress" />
                <label htmlFor="mail">
                  <i className="far fa-envelope"></i>
                </label>
              </div>
            </div>
            {/* Resto del formulario aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
