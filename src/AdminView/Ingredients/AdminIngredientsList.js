import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminIngredientsList = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedHindiName, setUpdatedHindiName] = useState("");
  const [updatedUrl, setUpdatedUrl] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://118.139.165.183:8000/api/ingredients/")
      .then((response) => {
        setIngredientsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (ingredient) => {
    setSelectedIngredient(ingredient);
    setUpdatedName(ingredient.name);
    setUpdatedHindiName(ingredient.hindi_name);
    setUpdatedUrl(ingredient.url);
    setUpdatedImage(ingredient.image);
    setEditModalShow(true);
  };

  const handleDelete = (ingredient) => {
    setSelectedIngredient(ingredient);
    setDeleteModalShow(true);
  };

  const handleEditSubmit = () => {
    const { id } = selectedIngredient;
    const formData = new FormData();
    formData.append("name", updatedName);
    formData.append("hindi_name", updatedHindiName);
    formData.append("url", updatedUrl);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    axios
      .patch(`http://118.139.165.183:8000/api/ingredients/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setEditModalShow(false);
        axios
          .get("http://118.139.165.183:8000/api/ingredients/")
          .then((response) => {
            setIngredientsData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching ingredients:", error);
          });
      })
      .catch((error) => {
        console.error("Error editing ingredient:", error);
      });
  };

  const handleDeleteSubmit = () => {
    const { id } = selectedIngredient;
    axios
      .delete(`http://118.139.165.183:8000/api/ingredients/${id}/`)
      .then(() => {
        setDeleteModalShow(false);
        axios
          .get("http://118.139.165.183:8000/api/ingredients/")
          .then((response) => {
            setIngredientsData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching ingredients:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting ingredient:", error);
      });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setUpdatedImage(URL.createObjectURL(e.target.files[0]));
  };

  const filteredIngredients = ingredientsData.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Row>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col sm={2}>
          <Link to="/admin/create-ingredients">
            <Button style={{ width: "100%" }}>+ Add New Ingredients</Button>
          </Link>
        </Col>
      </Row>
      <div className="mt-3">
        <table className="billing-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Hindi Name</th>
              <th>URL</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredIngredients.map((ingredient) => (
              <tr key={ingredient.id}>
                <td>{ingredient.id}</td>
                <td>{ingredient.name}</td>
                <td>{ingredient.hindi_name}</td>
                <td>{ingredient.url}</td>
                <td>
                  {ingredient.image && (
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button onClick={() => handleEdit(ingredient)}>Edit</Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button variant="danger" onClick={() => handleDelete(ingredient)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Edit Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hindi Name</Form.Label>
            <Form.Control
              type="text"
              value={updatedHindiName}
              onChange={(e) => setUpdatedHindiName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              value={updatedUrl}
              onChange={(e) => setUpdatedUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
            {updatedImage && (
              <img
                src={updatedImage}
                alt="Ingredient"
                style={{ height: "100px", width: "auto", marginTop: "10px" }}
              />
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {selectedIngredient && selectedIngredient.name}</p>
          <p>Hindi Name: {selectedIngredient && selectedIngredient.hindi_name}</p>
          <p>URL: {selectedIngredient && selectedIngredient.url}</p>
          <p>Image:</p>
          <img
                src={selectedIngredient && selectedIngredient.image}
                alt="Ingredient"
                style={{ height: "100px", width: "auto", marginTop: "10px" }}
              />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteModalShow(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminIngredientsList;
