import React, { useState, useEffect } from 'react';
import reservation from "../../assets/reservation.png";
import { fetchAPI, submitAPI } from '../../api/api'; 
import "./Reservation.css"

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.date) {
      const times = fetchAPI(new Date(formData.date));
      setAvailableTimes(times);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      // Lógica para redirigir a la página de confirmación
      console.log('Reserva confirmada:', formData);
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name & Surname" />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <select name="time" value={formData.time} onChange={handleChange}>
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <button type="submit">Make Reservation</button>
            </form>
          </div>
          <div className="image">
            <img src={reservation} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
