import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    properties: [{ title: '' }],
    note: [{  title: '' }],
    howtouse: [{  title: '' }],
    benefits: [{ title: '' }],
    fixed_price: null,
    available_discount: null,
    distributed_price: null,
    active_status: false,
    available_quantity: null,
    images: [{ title: '',file:null  }],
  });

  console.log("formData",formData)

  const handleChange = (e, index, field) => {
    const { name, value, files } = e.target;
    const newFormData = { ...formData };
  
    if (field === 'images' && files) {
      const file = files[0];
      newFormData[field][index].title = file.name;
      newFormData[field][index].file = file;
    } else {
      newFormData[field][index][name] = value;
    }
  
    setFormData(newFormData);
  };
  

  const handleAddField = (field) => {
    const newFormData = { ...formData };
    newFormData[field].push({title: '',file:'' });
    setFormData(newFormData);
  };

  const handleRemoveField = (index, field) => {
    const newFormData = { ...formData };
    newFormData[field].splice(index, 1);
    setFormData(newFormData);
  };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post('http://52.66.167.53:8000/api/products/', formData);
  //     alert('Product created successfully');
  //   } catch (error) {
  //     console.error('Error creating product:', error);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('subtitle', formData.subtitle);
      formDataToSend.append('fixed_price', formData.fixed_price);
      formDataToSend.append('available_discount', formData.available_discount);
      formDataToSend.append('distributed_price', formData.distributed_price);
      formDataToSend.append('active_status', formData.active_status);
      formDataToSend.append('available_quantity', formData.available_quantity);
  
      formData.images.forEach((image, index) => {
        formDataToSend.append(`image${index}`, image.file); // Assuming the server expects files with keys like 'image0', 'image1', etc.
      });
  
      await axios.post('http://52.66.167.53:8000/api/products/', formDataToSend);
      alert('Product created successfully');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
  

  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group controlId="subtitle">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            placeholder="Enter subtitle"
          />
        </Form.Group>

        <Form.Group controlId="properties">
          <Form.Label>Properties</Form.Label>
          {formData.properties.map((property, index) => (
            <Row key={index}>
              <Col sm={11}>
                <Form.Control
                  type="text"
                  name="title"
                  value={property.title}
                  onChange={(e) => handleChange(e, index, 'properties')}
                  placeholder="Enter property"
                />
              </Col>
              <Col sm={1}>
                <Button onClick={() => handleRemoveField(index, 'properties')} variant="danger">
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button onClick={() => handleAddField('properties')} variant="primary" className='mt-2'>
            Add New
          </Button>
        </Form.Group>

        <Form.Group controlId="benefits">
          <Form.Label>Benefits</Form.Label>
          {formData.benefits.map((benefits, index) => (
            <Row key={index}>
              <Col sm={11}>
                <Form.Control
                  type="text"
                  name="title"
                  value={benefits.title}
                  onChange={(e) => handleChange(e, index, 'benefits')}
                  placeholder="Enter property"
                />
              </Col>
              <Col sm={1}>
                <Button onClick={() => handleRemoveField(index, 'benefits')} variant="danger">
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button onClick={() => handleAddField('benefits')} variant="primary" className='mt-2'>
            Add New
          </Button>
        </Form.Group>

        <Form.Group controlId="note">
          <Form.Label>Note</Form.Label>
          {formData.note.map((note, index) => (
            <Row key={index}>
              <Col sm={11}>
                <Form.Control
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={(e) => handleChange(e, index, 'note')}
                  placeholder="Enter note"
                />
              </Col>
              <Col sm={1}>
                <Button onClick={() => handleRemoveField(index, 'note')} variant="danger">
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button onClick={() => handleAddField('note')} variant="primary">
            Add New
          </Button>
        </Form.Group>

        <Form.Group controlId="howtouse">
          <Form.Label>How to Use</Form.Label>
          {formData.howtouse.map((use, index) => (
            <Row key={index}>
              <Col>
                <Form.Control
                  type="text"
                  name="title"
                  value={use.title}
                  onChange={(e) => handleChange(e, index, 'howtouse')}
                  placeholder="Enter how to use"
                />
              </Col>
              <Col>
                <Button onClick={() => handleRemoveField(index, 'howtouse')} variant="danger">
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button onClick={() => handleAddField('howtouse')} variant="primary">
            Add New
          </Button>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Fixed Price</Form.Label>
          <Form.Control
            type="number"
            name="fixed_price"
            value={formData.fixed_price}
            onChange={(e) => setFormData({ ...formData, fixed_price: e.target.value })}
            placeholder="Enter price"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Available Discount</Form.Label>
          <Form.Control
            type="number"
            name="available_discount"
            value={formData.available_discount}
            onChange={(e) => setFormData({ ...formData, available_discount: e.target.value })}
            placeholder="Available Discount"
          />
        </Form.Group>

        <Form.Group controlId="distributed_price">
          <Form.Label>Distributed Price</Form.Label>
          <Form.Control
            type="number"
            name="distributed_price"
            value={formData.distributed_price}
            onChange={(e) => setFormData({ ...formData, distributed_price: e.target.value })}
            placeholder="Enter distributed price"
          />
        </Form.Group>

        <Form.Group controlId="activeStatus">
          <Form.Check
            type="checkbox"
            label="Active Status"
            checked={formData.active_status}
            onChange={(e) => setFormData({ ...formData, active_status: e.target.checked })}
          />
        </Form.Group>

        <Form.Group controlId="available_quantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="available_quantity"
            value={formData.available_quantity}
            onChange={(e) => setFormData({ ...formData, available_quantity: e.target.value })}
            placeholder="Enter available quantity"
          />
        </Form.Group>

        <Form.Group controlId="images">
  <Form.Label>Images</Form.Label>
  {formData.images.map((image, index) => (
    <Row key={index}>
      <Col>
        <Form.Control
          type="file"
          name="file"
          label={image.title || 'Choose file'}
          onChange={(e) => handleChange(e, index, 'images')}
        />
      </Col>
      <Col>
        <Button onClick={() => handleRemoveField(index, 'images')} variant="danger">
          Remove
        </Button>
      </Col>
    </Row>
  ))}
  <Button onClick={() => handleAddField('images')} variant="primary">
    Add New
  </Button>
</Form.Group>


        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
