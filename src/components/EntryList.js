import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/internship')
      .then((res) => setEntries(res.data));
  }, []);

  return (
    <div>
      {entries.map((entry) => (
        <div key={entry._id}>
          <h3>Day {entry.day}</h3>
          <p>Date: {new Date(entry.date).toDateString()}</p>
          <p>Topics: {entry.topics}</p>
          <p>Description: {entry.description}</p>
          {entry.image && <img src={entry.image} alt="Entry" width="200px" />}
        </div>
      ))}
    </div>
  );
};

export default EntryList;
