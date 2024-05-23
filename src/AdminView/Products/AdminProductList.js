import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AdminProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedDiscount, setUpdatedDiscount] = useState('');

  useEffect(() => {
    axios.get(`https://aversaherbals.com/api/products/`)
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setUpdatedPrice(product.fixed_price);
    setUpdatedDiscount(product.available_discount);
    setEditModalShow(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteModalShow(true);
  };

  const handleEditSubmit = () => {
    const { id } = selectedProduct;
    axios.patch(`https://aversaherbals.com/api/products/partial-update/${id}/`, {
      fixed_price: updatedPrice,
      available_discount: updatedDiscount,
      active_status:true
    }).then(() => {
      setEditModalShow(false);
      axios.get(`https://aversaherbals.com/api/products/`)
        .then((response) => {
          setProductsList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }).catch((error) => {
      console.error('Error editing product:', error);
    });
  };

  const handleDeleteSubmit = () => {
    const { id } = selectedProduct;
    axios.delete(`https://aversaherbals.com/api/products/delete/${id}/`)
      .then(() => {
        setDeleteModalShow(false);
        axios.get(`https://aversaherbals.com/api/products/`)
          .then((response) => {
            setProductsList(response.data);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      }).catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const handleActiveStatusChange = (productId, activeStatus) => {
    axios.patch(`https://aversaherbals.com/api/products/partial-update/${productId}/`, {
      active_status: activeStatus
    }).then(() => {
      axios.get(`https://aversaherbals.com/api/products/`)
        .then((response) => {
          setProductsList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }).catch((error) => {
      console.error('Error updating active status:', error);
    });
  };

  const filteredProducts = productsList.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Row>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col sm={2}>
          <Link to="/admin/create-products">
            <Button style={{ width: "100%" }}>+ Add New Products</Button>
          </Link>
        </Col>
      </Row>
      <div className='mt-3'>
        <table className='billing-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Selling Price</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Active Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                <Link to={`/admin/update-product-data/${product.id}/${product.title}`} style={{textDecoration:"none",cursor:"pointer"}}>
                {product.title}
                </Link>
                </td>
                <td>{product.fixed_price}</td>
                <td>{product.available_discount}%</td>
                <td>
                  {(product.fixed_price * (1 - product.available_discount / 100)).toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button onClick={() => handleEdit(product)}>Edit</Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button variant='danger' onClick={() => handleDelete(product)}>Delete</Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={product.active_status}
                    onChange={(e) => handleActiveStatusChange(product.id, e.target.checked)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Title: {selectedProduct && selectedProduct.title}</p>
          <Form.Group>
            <Form.Label>New Price</Form.Label>
            <Form.Control
              type="text"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Discount</Form.Label>
            <Form.Control
              type="text"
              value={updatedDiscount}
              onChange={(e) => setUpdatedDiscount(e.target.value)}
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

      <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Title: {selectedProduct && selectedProduct.title}</p>
          <p>Price: {selectedProduct && selectedProduct.fixed_price}</p>
          <p>Discount: {selectedProduct && selectedProduct.available_discount}%</p>
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
}

export default AdminProductList;
