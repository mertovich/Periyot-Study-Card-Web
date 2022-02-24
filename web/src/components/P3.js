import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Check from '../images/check.png'
import Screen from '../images/screen3.png'



const P3 = () => {
  return (
    <div>
      <Row>
        <Col style={{
          marginLeft: '15%',
          marginTop: '10%',
          marginRight: '25%',
        }} >
           <h2>Features</h2>
          <p><img src={Check} height='25px' alt='' /> It allows you to learn quickly by shuffling the words in your vocabulary list. </p>
          <p><img src={Check} height='25px' alt='' /> You can see your last score </p>
          <p><img src={Check} height='25px' alt='' /> Stores your highest score</p>
        </Col>
        <Col className='text-center' >
          <img src={Screen} height='90%' alt='' style={{
            marginTop: '10%',
            borderRadius: '20px',
          }} />
        </Col>
      </Row>
    </div>
  )
}

export default P3