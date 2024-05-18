import React from 'react';
import { submitAPI } from './api'; 
import BookingForm from './BookingForm';

const Main = () => {
  const submitForm = async (formData) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        console.log('Form successfully submitted');
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default Main;
