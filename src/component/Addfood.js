import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function Addfood() {
  const [FoodName, setFoodname] = useState("");
  const [FoodType, setFoodtype] = useState("");
  const [FoodPrice, setFoodprice] = useState("");
  const [FoodCategory, setFoodcategory] = useState("");
  const [FoodImage, setFoodimg] = useState("");

  const addFood = () => {
    const food = {
      FoodName: FoodName,
      FoodType: FoodType,
      FoodCategory: FoodCategory,
      FoodImg: FoodImage,
      FoodPrice: Number(FoodPrice),
    };
    axios
      .post("http://localhost:5000/api/addfood", food)
      .then((result) => {
        console.log("DATA", result.data);
        alert("Food Added Successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async function handlechangeimage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfile", imgData)
      .then((res) => {
        console.log("Res:", res.data);
        setFoodimg(res.data.filepath);
        alert("Image Uploaded");
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  }
  return (
    <div>
      <Form>
        <Container>
          <Form.Group>
            <Form.Label>Food Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Enter your food name"
              onChange={(e) => setFoodname(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Food Type</Form.Label>
            <Form.Label>Select Type</Form.Label>
            <Form.Check
              onChange={(e) => setFoodtype(e.target.value)}
              type="Radio"
              name="type"
              value="Veg"
              label="Veg"
            ></Form.Check>
            <Form.Check
              onChange={(e) => setFoodtype(e.target.value)}
              type="Radio"
              name="type"
              value="Non Veg"
              label="Non Veg"
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Food Price</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter food Price"
              onChange={(e) => setFoodprice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Food Category</Form.Label>
            <Form.Select onChange={(e) => setFoodcategory(e.target.value)}>
              <option value="Rice">Rice</option>
              <option value="Soups">Soups</option>
              <option value="Dessert">Dessert</option>
              <option value="Fast Food">Fast Food</option>
              <option value="South Indian">South Indian</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Food Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Select your file"
              onChange={handlechangeimage}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button onClick={() => addFood()}>Submit</Button>
          </Form.Group>
          <Row>
            <Col>
              <h3>{FoodName}</h3>
            </Col>
            <Col>
              <h3>{FoodType}</h3>
            </Col>
            <Col>
              <h3>{FoodPrice}</h3>
            </Col>
            <Col>
              <h3>{FoodCategory}</h3>
            </Col>
            <Col>
              <h3>{FoodImage}</h3>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Addfood;
