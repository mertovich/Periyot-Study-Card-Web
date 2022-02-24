import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Screen from '../images/screen1.png'

const P1 = () => {
  return (
    <div>
      <Row>
        <Col style={{
          marginLeft: '3%',
          marginTop: '25%',
        }} >
        <h1>Study Card</h1>
        <p>dy Card is a new and innovative way 
          to memorize words and phrases. You can 
          create your own vocabulary list and test 
          yourself, so learning new words is now 
          very easy and practical.
          </p>
        </Col>
        <Col className='text-center'>
        <img src={Screen} height='90%' alt='' style={{
          marginTop:'10%',
          borderRadius: '20px',
        }}/>
        </Col>
      </Row>
    </div>
  )
}

export default P1