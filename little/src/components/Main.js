// Main.js
import React from 'react';
import { submitAPI } from './api'; // Importa la función submitAPI desde el archivo api.js
import ConfirmedBooking from './ConfirmedBooking';
import BookingForm from './BookingForm';

const Main = () => {
  const submitForm = async (formData) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        // Si la respuesta es true, navega a la página de confirmación de reserva
        // Puedes usar useHistory o useNavigate según la configuración de tu aplicación de enrutamiento
        // Por ejemplo, si estás utilizando React Router:
        // history.push('/confirmation');
        // O si estás utilizando React Router DOM v6:
        // navigate('/confirmation');
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default Main;
