import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, FormCheck } from "react-bootstrap";

const CreateProductNew = () => {
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
    available_quantity: 0,
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

  //   const [ingredientsData, setIngredientsData] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("http://118.139.165.183:8000/api/ingredients/")
  //       .then((response) => {
  //         setIngredientsData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const ingredientsData = [
    {
      id: 1,
      name: "Cinnamon",
      image:
        "http://118.139.165.183:8000/uploads/ingredients_images/pngwing_1.png",
      hindi_name: "दालचीनी",
      url: "https://en.wikipedia.org/wiki/Cinnamon",
    },
    {
      id: 2,
      name: "Withania somnifera",
      image:
        "http://118.139.165.183:8000/uploads/ingredients_images/pngwing.png",
      hindi_name: "अश्वगंधा",
      url: "https://en.wikipedia.org/wiki/Withania_somnifera",
    },
    {
      id: 3,
      name: "Test",
      image:
        "http://118.139.165.183:8000/uploads/ingredients_images/aversa_apache2_config.png",
      hindi_name: "Test hindi",
      url: "http://www.aversaherbals.com/",
    },
    {
      id: 4,
      name: "test2",
      image:
        "http://118.139.165.183:8000/uploads/ingredients_images/aversa_apache2_config_lon9VGx.png",
      hindi_name: "test2",
      url: "http://www.aversaherbals.com/",
    },
  ];

  const productByProductType = [
    {
      id: 1,
      name: "Test product by product",
    },
    {
      id: 2,
      name: "Test product by product",
    },
    {
      id: 3,
      name: "test product3",
    },
    {
      id: 4,
      name: "test product 4",
    },
    {
      id: 5,
      name: "test product 4",
    },
  ];

  const diseaseByDisease = [
    {
      id: 1,
      name: "test2",
    },
    {
      id: 2,
      name: "test2",
    },
    {
      id: 3,
      name: "test2",
    },
    {
      id: 4,
      name: "test2",
    },
  ];

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

  const handleProductByProductChange = (productId, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        product_by_product: [...formData.product_by_product, productId],
      });
    } else {
      const updatedProductByProduct = formData.product_by_product.filter(
        (id) => id !== productId
      );
      setFormData({ ...formData, product_by_product: updatedProductByProduct });
    }
  };

  const handleDiseaseByDiseaseChange = (diseaseId, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        product_by_disease: [...formData.product_by_disease, diseaseId],
      });
    } else {
      const updatedDiseaseByDisease = formData.product_by_disease.filter(
        (id) => id !== diseaseId
      );
      setFormData({ ...formData, product_by_disease: updatedDiseaseByDisease });
    }
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
    try {
      const response = await fetch(
        "http://118.139.165.183:8000/api/products-post/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save form data");
      }

      const responseData = await response.json();
      const productId = responseData.id;

      const formDataWithImages = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key.startsWith("image")) {
          formDataWithImages.append(key, value);
        }
      });

      const uploadResponse = await fetch(
        `http://118.139.165.183:8000/api/products-put/${productId}`,
        {
          method: "PUT",
          body: formDataWithImages,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload images");
      }

      console.log("Form data and images uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
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

          <Row >
            <Col sm={6} >
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
            <Col sm={6} >
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
          </Row>

          <Form.Group controlId="ingredientSearch" className="mt-3">
            <Form.Label>Search Ingredients</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search ingredients..."
              value={ingredientSearch}
              onChange={handleIngredientSearchChange}
              className="mb-0"
            />
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
                    onChange={(e) =>
                      handleIngredientChange(ingredient.id, e.target.checked)
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
                <Col sm={3}>
                  <Form.Check
                    key={product.id}
                    id={`product-${product.id}`}
                    type="checkbox"
                    label={product.name}
                    onChange={(e) =>
                      handleProductByProductChange(product.id, e.target.checked)
                    }
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>

          <Form.Group controlId="diseaseSearch" className="mt-3">
            <Form.Label>Search Diseases</Form.Label>
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
                <Col sm={3}>
                  <Form.Check
                    key={disease.id}
                    id={`disease-${disease.id}`}
                    type="checkbox"
                    label={disease.name}
                    onChange={(e) =>
                      handleDiseaseByDiseaseChange(disease.id, e.target.checked)
                    }
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>

          {/* <Form.Group controlId="available_quantity">
          <Form.Label>Available Quantity for Sale</Form.Label>
          <Form.Control
            type="number"
            name="available_quantity"
            value={formData.available_quantity}
            onChange={handleInputChange}
          />
        </Form.Group> */}

          <Form.Group controlId="properties" className="mt-3">
            <Form.Label>Properties in One Line</Form.Label>
            {formData.properties.map((property, index) => (
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
            {formData.benefits.map((benefits, index) => (
              <Row key={index}>
                <Col sm={11}>
                  <Form.Control
                    type="text"
                    value={benefits.title}
                    onChange={(e) =>
                      handleArrayInputChange(index, "benefits", e.target.value)
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
            {formData.howtouse.map((howtouse, index) => (
              <Row key={index}>
                <Col sm={11}>
                  <Form.Control
                    type="text"
                    value={howtouse.title}
                    onChange={(e) =>
                      handleArrayInputChange(index, "howtouse", e.target.value)
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
            {formData.note.map((note, index) => (
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
            <Button onClick={() => handleAddField("note")}>Add Property</Button>
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
          <Form.Group>
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
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateProductNew;
