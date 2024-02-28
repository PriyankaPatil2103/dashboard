import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Orderdetails() {
  const { OrderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    const orddata = {
      OrderId: OrderId,
    };
    axios
      .post("http://localhost:5000/api/getorderById", orddata)
      .then((result) => {
        setOrderData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});

  const updateOrderStatus = () => {
    const statusData = {
      oid: OrderId,
      OrderStatus: orderStatus,
    };
    axios
      .post("http://localhost:5000/api/updateOrderStatus", statusData)
      .then((result) => {
        console.log("Data", result);
        alert("Status Updated");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Orderdetails
      <h3>{OrderId}</h3>
      <Container>
        <Row>
          <h3>
            <b>Customer Details</b>
          </h3>
          <h4>{orderData?.CustId?.CustomerName}</h4>
          <h4>{orderData?.CustId?.CustomerMobNo}</h4>
          <h4>{orderData?.OrderStatus}</h4>
        </Row>
        <Row>
          <h3>OrderItems</h3>
          {orderData?.OrderItems?.map((item) => {
            return (
              <Col>
                <Card>
                  <Card.Img
                    src={`http://localhost:5000${item.FoodId.FoodImg}`}
                  ></Card.Img>
                  <Card.Text>{item.FoodId.FoodName}</Card.Text>
                  <Card.Text>{item.Qty}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Food Type</Form.Label>
              <Form.Label>Select Type</Form.Label>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Pending"
                label="Pending"
              ></Form.Check>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Approve"
                label="Approve"
              ></Form.Check>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Dispatch"
                label="Dispatch"
              ></Form.Check>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Intransit"
                label="Intransit"
              ></Form.Check>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Delivered"
                label="Delivered"
              ></Form.Check>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Cancel"
                label="Cancel"
              ></Form.Check>
            </Form.Group>
          </Form>
          <Row>
            <Button onClick={() => updateOrderStatus()}>Update Status</Button>
            <Button>Delete</Button>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Orderdetails;
