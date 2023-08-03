import React, { useState } from 'react';

function Booking() {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking successful!');
    // You may call an API here to store the booking information
  };

  return (
    <div className="booking">
      <h2>Make a Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" onChange={handleChange} required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
