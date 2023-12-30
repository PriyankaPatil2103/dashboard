import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'

function Addfood() {
  return (
    <div>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>FoodName:</Form.Label>
              <Form.Control type='text' placeholder='Enter food name'></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>FoodCategory:</Form.Label>
              <select>
                <option value='South Indian'>South Indian Food</option>
                <option value='Vegterian Indian food'>Vegterian Indian food</option>
                <option value='Desserts'>Desserts</option>
              </select>
              </Form.Group>
            
              <label>FoodType: 
              
              <input type='radio' value="South Indian" name="FoodType"></input>
              South Indian
              </label>
              <label>
              <input type='radio' value='Veg Indian food ' name="FoodType"/>
              Vegterian Indian Food
              </label>
              <label>
                <input type="radio" value="Desserts" name="FoodType"/>
                Desserts
              </label>
           
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Addfood