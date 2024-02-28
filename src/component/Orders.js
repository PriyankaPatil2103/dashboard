import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [ordersData, setordersData] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallorders")
      .then((result) => {
        console.log("DATA", result.data);
        setordersData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>orders</h3>
      <Container>
        <Row>
          {ordersData.map((order) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Title>{order.OrderDate}</Card.Title>
                  <Card.Text>{order.OrderTotal}</Card.Text>
                  {/* <Card.Text>{order.OrderItems}</Card.Text> */}
                  <Card.Text>{order.OrderSize}</Card.Text>
                  <Card.Text>{order.OrderStatus}</Card.Text>
                  <Card.Footer>
                    <Button onClick={() => navi(`/OrderDetails/${order._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Orders;
