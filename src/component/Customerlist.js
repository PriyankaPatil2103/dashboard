import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";


const Customerlist = () => {
  const [customerData, setcustomerData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallcustomer")
      .then((result) => {
        console.log("DATA", result.data);
        setcustomerData(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {customerData.map((customer) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Title>{customer.CustomerName}</Card.Title>
                  <Card.Text>{customer.CustomerEmail}</Card.Text>
                  <Card.Text>{customer.CustomerAddress}</Card.Text>
                  <Card.Text>{customer.CustomerMobno}</Card.Text>
                  <Card.Text>{customer.CustomerPassword}</Card.Text>
                  <Card.Text>{customer.CustomerCity}</Card.Text>
                  <Card.Footer>
                    <Button>Block</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Customerlist;
