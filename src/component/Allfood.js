import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import idli from '../images/idli.jpg'
import dosa from '../images/dosa.jpg'
import biryani from '../images/biryani.jpg'
import rice from '../images/rice.jpg'
import AlooGobi from '../images/AlooGobi.jpg'
import BainganBharta from '../images/BainganBharta.jpg'
import ChanaMasala from '../images/ChanaMasala.jpg'
import palakpaneer from '../images/Palakpaneer.jpg'
import cake from '../images/chocolatecake.jpg'
import icecream from '../images/icecream.jpg'
import gulabjamun from '../images/gulabjamun.jpg'
import cookie from '../images/chocolatecookie.jpg'

function Allfood() {
  return (
    <div>
      <Container>
        <Row>
          <Col className='col-one' sm={12} md={6} lg={3}>
            <Card>
              <Card.Img src={idli}/>
              <Card.Title>South Indian</Card.Title> 
              <Card.Subtitle>Idli Sambar</Card.Subtitle>
              <Card.Text>Price:250</Card.Text>
             </Card>
             </Col>
             <Col className='col-two' sm={12} md={6} lg={3}>
             <Card>
              <Card.Img src={dosa}/>
              <Card.Title>South Indian</Card.Title>
              <Card.Subtitle>Dosa</Card.Subtitle>
              <Card.Text>Price:150</Card.Text>
             </Card>
             </Col>
             <Col className='col-three' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={biryani}/>
                <Card.Title>South Indian</Card.Title>
                <Card.Subtitle>Veg Biryani</Card.Subtitle>
                <Card.Text>Price:300</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={rice}/>
                <Card.Title>South Indian</Card.Title>
                <Card.Subtitle>Rice</Card.Subtitle>
                <Card.Text>Price:100</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={AlooGobi}/>
                <Card.Title>Indian Vegeterian Food</Card.Title>
                <Card.Subtitle>AlooGobi</Card.Subtitle>
                <Card.Text>Price:150</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={BainganBharta}/>
                <Card.Title>Indian Vegeterian Food</Card.Title>
                <Card.Subtitle>BainganBharta</Card.Subtitle>
                <Card.Text>Price:400</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={ChanaMasala}/>
                <Card.Title>Indian Vegeterian Food</Card.Title>
                <Card.Subtitle>ChanaMasala</Card.Subtitle>
                <Card.Text>Price:250</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={palakpaneer}/>
                <Card.Title>Indian Vegeterian Food</Card.Title>
                <Card.Subtitle>palakpaneer</Card.Subtitle>
                <Card.Text>Price:350</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={icecream}/>
                <Card.Title>Desserts</Card.Title>
                <Card.Subtitle>Ice Cream</Card.Subtitle>
                <Card.Text>Price:300</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={gulabjamun}/>
                <Card.Title>Desserts</Card.Title>
                <Card.Subtitle>Indian Desserts</Card.Subtitle>
                <Card.Text>Price:210</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={cake}/>
                <Card.Title>Desserts</Card.Title>
                <Card.Subtitle>Cakes</Card.Subtitle>
                <Card.Text>Price:90</Card.Text>
              </Card>
             </Col>
             <Col className='col-four' sm={12} md={6} lg={3}>
              <Card>
                <Card.Img src={cookie}/>
                <Card.Title>Desserts</Card.Title>
                <Card.Subtitle>Cookies</Card.Subtitle>
                <Card.Text>Price:100</Card.Text>
              </Card>
             </Col>
             
          
        </Row>
      </Container>
    </div>
  )
}

export default Allfood