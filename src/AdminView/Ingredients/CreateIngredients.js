import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const CreateIngredients = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    hindi_name: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("hindi_name", formData.hindi_name);
      formDataToSend.append("url", formData.url);

      await axios.post(
        "http://118.139.165.183:8000/api/ingredients/",
        formDataToSend
      );
      alert("Ingredient added successfully");
    } catch (error) {
      console.error("Error adding ingredient:", error);
    }
  };

  return (
    <Container>
      <h1>Add Ingredient</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="hindi_name">
          <Form.Label>Hindi Name</Form.Label>
          <Form.Control
            type="text"
            name="hindi_name"
            value={formData.hindi_name}
            onChange={handleChange}
            placeholder="Enter Hindi name"
          />
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter URL"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateIngredients;
