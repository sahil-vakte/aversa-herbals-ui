import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import CreateProductDiseaseType from "./CreateProductDiseaseType";

const ProductDiseaseTypeList = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    axios
      .get("http://118.139.165.183:8000/api/products-by-disease/")
      .then((response) => {
        setIngredientsData(response.data);
      });
  };

  useEffect(() => {
    axios
      .get("http://118.139.165.183:8000/api/products-by-disease/")
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
    axios
      .patch(
        `http://118.139.165.183:8000/api/products-by-disease/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        setEditModalShow(false);
        axios
          .get("http://118.139.165.183:8000/api/products-by-disease/")
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
      .delete(`http://118.139.165.183:8000/api/products-by-disease/${id}/`)
      .then(() => {
        setDeleteModalShow(false);
        axios
          .get("http://118.139.165.183:8000/api/products-by-disease/")
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
          <Button style={{ width: "100%" }} onClick={() => setShowModal(true)}>
            + Add New Disease Type
          </Button>
        </Col>
      </Row>
      <div className="mt-3">
        <table className="billing-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredIngredients.map((ingredient) => (
              <tr key={ingredient.id}>
                <td>{ingredient.id}</td>
                <td>{ingredient.name}</td>

                <td style={{ textAlign: "center" }}>
                  <Button onClick={() => handleEdit(ingredient)}>Edit</Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(ingredient)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <Modal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Disease type</Modal.Title>
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
      <Modal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Disease type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {selectedIngredient && selectedIngredient.name}</p>
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

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Disease Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProductDiseaseType handleClose={handleModalClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductDiseaseTypeList;
