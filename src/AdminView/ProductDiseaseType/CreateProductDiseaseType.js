import React, { useState } from 'react';
import axios from 'axios';

const CreateProductDiseaseType = ({ handleClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://118.139.165.183:8000/api/products-by-disease/', { name })
      .then((response) => {
        console.log('Disease type added successfully:', response.data);
        handleClose(); 
      })
      .catch((error) => {
        console.error('Error adding disease type:', error);
      });
  };

  return (
    <div>
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mt-3'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductDiseaseType;
