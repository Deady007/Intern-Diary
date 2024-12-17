import React, { useState } from 'react';
import axios from 'axios';

const AddEntry = () => {
  const [formData, setFormData] = useState({
    day: '',
    topics: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/internship', formData);
    alert('Entry added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="day" placeholder="Day" onChange={handleChange} />
      <input type="text" name="topics" placeholder="Topics Covered" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Save Entry</button>
    </form>
  );
};

export default AddEntry;
