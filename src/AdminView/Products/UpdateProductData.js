import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col, FormCheck, Modal } from "react-bootstrap";
import AdminLoader from "../AdminLoader/AdminLoader";
import CreateIngredients from "../Ingredients/CreateIngredients";
const UpdateProductData = () => {
  const paramsData = useParams();
  const [apiTrigger, setapiTrigger] = useState(false);

  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    properties: [{ title: "" }],
    note: [{ title: "" }],
    howtouse: [{ title: "" }],
    benefits: [{ title: "" }],
    fixed_price: null,
    available_discount: 0,
    distributed_price: null,
    active_status: false,
    available_quantity: 1,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    ingredients: [],
    product_by_product: [],
    product_by_disease: [],
  });

  console.log("formData", formData);
 
  useEffect(() => {
    axios
      .get(`https://aversaherbals.com/api/products/${paramsData.id}`)
      .then((response) => {
        const data = response.data;
        // Update state for checkboxes and radio buttons
        const selectedIngredients = data.ingredients.map(
          (ingredient) => ingredient.name
        );
        const selectedProductType = data.product_by_product.map(
          (product) => product.name
        );
        const selectedDisease = data.product_by_disease.map(
          (disease) => disease.name
        );

        setFormData({
          ...data,
          ingredients: selectedIngredients,
          product_by_product: selectedProductType,
          product_by_disease: selectedDisease,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [ingredientsData, setIngredientsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://aversaherbals.com/api/ingredients/")
      .then((response) => {
        setIngredientsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiTrigger]);

  const [productByProductType, setproductByProductType] = useState([]);
  useEffect(() => {
    axios
      .get("https://aversaherbals.com/api/products-by-product/")
      .then((response) => {
        setproductByProductType(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [diseaseByDisease, setdiseaseByDisease] = useState([]);
  useEffect(() => {
    axios
      .get("https://aversaherbals.com/api/products-by-disease/")
      .then((response) => {
        setdiseaseByDisease(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayInputChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = { title: value };
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleAddField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], { title: "" }] });
  };

  const handleRemoveField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleImageChange = (e, imageNumber) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [`image${imageNumber}`]: file });
  };

  const handleIngredientChange = (ingredientId, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, ingredientId],
      });
    } else {
      const updatedIngredients = formData.ingredients.filter(
        (id) => id !== ingredientId
      );
      setFormData({ ...formData, ingredients: updatedIngredients });
    }
  };

  const handleProductByProductChange = (productId) => {
    setFormData({
      ...formData,
      product_by_product: [productId],
    });
  };

  const handleDiseaseByDiseaseChange = (diseaseId) => {
    setFormData({
      ...formData,
      product_by_disease: [diseaseId],
    });
  };

  const [ingredientSearch, setIngredientSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [diseaseSearch, setDiseaseSearch] = useState("");

  const filteredIngredients = ingredientsData.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(ingredientSearch.toLowerCase())
  );

  const filteredProductByProduct = productByProductType.filter((product) =>
    product.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredDiseaseByDisease = diseaseByDisease.filter((disease) =>
    disease.name.toLowerCase().includes(diseaseSearch.toLowerCase())
  );

  const handleIngredientSearchChange = (e) => {
    setIngredientSearch(e.target.value);
  };

  const handleProductSearchChange = (e) => {
    setProductSearch(e.target.value);
  };

  const handleDiseaseSearchChange = (e) => {
    setDiseaseSearch(e.target.value);
  };

  const handleSubmit = async () => {
    setloading(true);
    try {
      const {
        image1,
        image2,
        image3,
        image4,
        image5,
        ...formDataWithoutImages
      } = formData;

      const response = await fetch(
        `https://aversaherbals.com/api/products/partial-update/${paramsData.id}/`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataWithoutImages),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save form data");
      }

      const responseData = await response.json();
      const productId = responseData.id;

      const formDataWithImages = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key.startsWith("image") && value instanceof File) {
          formDataWithImages.append(key, value);
        }
      });

      if (
        formDataWithImages.has("image1") ||
        formDataWithImages.has("image2") ||
        formDataWithImages.has("image3") ||
        formDataWithImages.has("image4") ||
        formDataWithImages.has("image5")
      ) {
        const uploadResponse = await fetch(
          `https://aversaherbals.com/api/products/partial-update/${paramsData.id}/`,
          {
            method: "PATCH",
            body: formDataWithImages,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload images");
          setloading(false);
        }
      }
      setloading(false);
      console.log("Form data and images uploaded successfully");
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };


  const [CreateIngredientsModal, setCreateIngredientsModal] = useState(false);

  const OpenCreateIngredientsModal = () => {
    setCreateIngredientsModal(true);
  };
  const CloseCreateIngredientsModal = () => {
    setCreateIngredientsModal(false);
  };
  const handleSuccess = () => {
    setCreateIngredientsModal(false); 
    setapiTrigger(!apiTrigger)
  };


  return (
    <div>
      {loading && <AdminLoader />}
      <div className="add-product-page">
        <Container>
          <Form>
            <Form.Group controlId="title">
              <Form.Label className="add-product-form-label">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="subtitle">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Row>
              <Col sm={4}>
                <Form.Group controlId="fixed_price">
                  <Form.Label>Fixed Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="fixed_price"
                    value={formData.fixed_price}
                    onChange={handleInputChange}
                    className="mb-0"
                  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="available_discount">
                  <Form.Label>Discount on This Product</Form.Label>
                  <Form.Control
                    type="number"
                    name="available_discount"
                    value={formData.available_discount}
                    onChange={handleInputChange}
                    className="mb-0"
                  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="distributed_price">
                  <Form.Label>Distributing Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="distributed_price"
                    value={formData.distributed_price}
                    onChange={handleInputChange}
                    className="mb-0"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="ingredientSearch" className="mt-3">
              <Form.Label>Search Ingredients</Form.Label>
              <Row>
                <Col sm={10}>

              <Form.Control
                type="text"
                placeholder="Search ingredients..."
                value={ingredientSearch}
                onChange={handleIngredientSearchChange}
                className="mb-0"
              />
                </Col>
                
                <Col sm={2}>
                  <Button onClick={OpenCreateIngredientsModal}>
                    + Add New Ingredients
                  </Button>
                </Col>
                
              </Row>
            </Form.Group>

            <Form.Group controlId="ingredients">
              <Row>
                {filteredIngredients.map((ingredient) => (
                  <Col sm={3}>
                    <FormCheck
                      key={ingredient.id}
                      id={`ingredient-${ingredient.id}`}
                      type="checkbox"
                      label={ingredient.name}
                      checked={formData.ingredients.includes(ingredient.name)}
                      onChange={(e) =>
                        handleIngredientChange(
                          ingredient.name,
                          e.target.checked
                        )
                      }
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group controlId="productSearch" className="mt-3">
              <Form.Label>Search Product Types</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search product types..."
                value={productSearch}
                onChange={handleProductSearchChange}
                className="mb-0"
              />
            </Form.Group>

            <Form.Group controlId="productByProduct">
              <Row>
                {filteredProductByProduct.map((product) => (
                  <Col sm={3} key={product.id}>
                    <Form.Check
                      type="radio"
                      id={`product-${product.id}`}
                      label={product.name}
                      checked={formData.product_by_product[0] === product.name}
                      onChange={() =>
                        handleProductByProductChange(product.name)
                      }
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group controlId="diseaseSearch" className="mt-3">
              <Form.Label>Search Disease Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search diseases..."
                value={diseaseSearch}
                onChange={handleDiseaseSearchChange}
                className="mb-0"
              />
            </Form.Group>

            <Form.Group controlId="diseaseByDisease">
              <Row>
                {filteredDiseaseByDisease.map((disease) => (
                  <Col sm={3} key={disease.id}>
                    <Form.Check
                      type="radio"
                      id={`disease-${disease.id}`}
                      label={disease.name}
                      checked={formData.product_by_disease[0] === disease.name}
                      onChange={() =>
                        handleDiseaseByDiseaseChange(disease.name)
                      }
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group controlId="properties" className="mt-3">
              <Form.Label>Properties in One Line</Form.Label>
              {formData.properties &&
                formData.properties?.map((property, index) => (
                  <Row key={index}>
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        value={property.title}
                        onChange={(e) =>
                          handleArrayInputChange(
                            index,
                            "properties",
                            e.target.value
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveField(index, "properties")}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
              <Button onClick={() => handleAddField("properties")}>
                Add Property
              </Button>
            </Form.Group>

            <Form.Group controlId="benefits">
              <Form.Label>Properties Keywords</Form.Label>
              {formData.benefits &&
                formData.benefits?.map((benefits, index) => (
                  <Row key={index}>
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        value={benefits.title}
                        onChange={(e) =>
                          handleArrayInputChange(
                            index,
                            "benefits",
                            e.target.value
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveField(index, "benefits")}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
              <Button onClick={() => handleAddField("benefits")}>
                Add Property
              </Button>
            </Form.Group>

            <Form.Group controlId="howtouse">
              <Form.Label>Direction to Use</Form.Label>
              {formData.howtouse &&
                formData.howtouse?.map((howtouse, index) => (
                  <Row key={index}>
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        value={howtouse.title}
                        onChange={(e) =>
                          handleArrayInputChange(
                            index,
                            "howtouse",
                            e.target.value
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveField(index, "howtouse")}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
              <Button onClick={() => handleAddField("howtouse")}>
                Add Property
              </Button>
            </Form.Group>

            <Form.Group controlId="note">
              <Form.Label>Note</Form.Label>
              {formData.note &&
                formData.note?.map((note, index) => (
                  <Row key={index}>
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        value={note.title}
                        onChange={(e) =>
                          handleArrayInputChange(index, "note", e.target.value)
                        }
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveField(index, "note")}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
              <Button onClick={() => handleAddField("note")}>
                Add Property
              </Button>
            </Form.Group>

            <Form.Group>
              <Form.Label>Image 1</Form.Label>
              <Form.Control
                onChange={(e) => handleImageChange(e, 1)}
                accept="image/*"
                id="image1"
                label="Choose file"
                type="file"
              />
            </Form.Group>
            <div>
              {formData.image1 instanceof File ? (
                <img
                  src={URL.createObjectURL(formData.image1)}
                  alt="Uploaded Image"
                />
              ) : (
                <img src={formData.image1} />
              )}
            </div>

            {/* <Form.Group>
              <Form.Label>Image 2</Form.Label>
              <Form.Control
                onChange={(e) => handleImageChange(e, 2)}
                accept="image/*"
                id="image2"
                label="Choose file"
                type="file"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image 3</Form.Label>
              <Form.Control
                onChange={(e) => handleImageChange(e, 3)}
                accept="image/*"
                id="image3"
                label="Choose file"
                type="file"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image 4</Form.Label>
              <Form.Control
                onChange={(e) => handleImageChange(e, 4)}
                accept="image/*"
                id="image4"
                label="Choose file"
                type="file"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image 5</Form.Label>
              <Form.Control
                onChange={(e) => handleImageChange(e, 5)}
                accept="image/*"
                id="image5"
                label="Choose file"
                type="file"
              />
            </Form.Group> */}

            <Button variant="primary" onClick={handleSubmit} className="mt-3">
              Update Details
            </Button>
          </Form>
        </Container>
      </div>
      <Modal
        show={CreateIngredientsModal}
        onHide={CloseCreateIngredientsModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <CreateIngredients onSuccess={handleSuccess}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseCreateIngredientsModal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProductData;
