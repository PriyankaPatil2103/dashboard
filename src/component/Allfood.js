import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import idli from "../images/idli.jpg";
import dosa from "../images/dosa.jpg";
import biryani from "../images/biryani.jpg";
import rice from "../images/rice.jpg";
import AlooGobi from "../images/AlooGobi.jpg";
import BainganBharta from "../images/BainganBharta.jpg";
import ChanaMasala from "../images/ChanaMasala.jpg";
import palakpaneer from "../images/Palakpaneer.jpg";
import cake from "../images/chocolatecake.jpg";
import icecream from "../images/icecream.jpg";
import gulabjamun from "../images/gulabjamun.jpg";
import cookie from "../images/chocolatecookie.jpg";
import axios from "axios";

function Allfood() {
  const [foodData, setfoodData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("DATA", result.data);
        setfoodData(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {foodData.map((food) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img src={`http://localhost:5000${food.FoodImg}`} />
                  <Card.Title>{food.FoodName}</Card.Title>
                  <Card.Text>{food.FoodCategory}</Card.Text>
                  <Card.Text>{food.FoodPrize}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Allfood;
