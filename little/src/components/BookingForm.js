// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    // Define los campos del formulario y su estado inicial aquí
  });

  const handleChange = (e) => {
    // Implementa la lógica para actualizar el estado del formulario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función submitForm pasando los datos del formulario como parámetro
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Renderiza los campos del formulario y gestiona los cambios de estado */}
      <button type="submit">Enviar reserva</button>
    </form>
  );
};

export default BookingForm;
