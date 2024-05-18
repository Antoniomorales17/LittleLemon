import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import reservation from "../../assets/reservation.png";
import { fetchAPI, submitAPI } from '../../api/api'; 
import "./Reservation.css";

Modal.setAppElement('#root');

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    phone: '',
    guests: 1,
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchTimes = async () => {
      if (formData.date) {
        const times = await fetchAPI(new Date(formData.date));
        setAvailableTimes(times);
      }
    };

    fetchTimes();
  }, [formData.date]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      setShowConfirmation(true);  // Mostrar el modal de confirmación
      console.log('Reserva confirmada:', formData);
    } else {
      console.error('Error al enviar el formulario');
    }
  };

  return (
    <section id='reservation'>
      <div className="reservation">
        <div className="container">
          <div className="info">
            <h1>Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
            <p>
              Make online reservations, read restaurant reviews from diners, and
              earn points towards free meals. OpenTable is a real-time online
              reservation.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name & Surname" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email Address" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a time</option>
                  {Array.isArray(availableTimes) && availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Phone Number" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  name="guests" 
                  value={formData.guests} 
                  onChange={handleChange} 
                  placeholder="Number of Guests" 
                  min="1" 
                  required 
                />
              </div>
              <button type="submit">Make Reservation</button>
            </form>
          </div>
          <div className="image">
            <img src={reservation} alt="Reservation" />
          </div>
        </div>
      </div>
      <Modal
        isOpen={showConfirmation}
        onRequestClose={() => setShowConfirmation(false)}
        contentLabel="Confirmation Modal"
        className="confirmation-modal"
        overlayClassName="confirmation-modal-overlay"
      >
        <div className="modal-content">
          <h2>Reservation Confirmed!</h2>
          <p>Thank you for your reservation. We look forward to seeing you!</p>
          <button onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      </Modal>
    </section>
  );
};

export default Reservation;
