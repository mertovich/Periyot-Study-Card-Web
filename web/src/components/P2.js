import React from 'react'
import { Row, Col,} from 'react-bootstrap'
import Screen from '../images/screen2.png'
import Check from '../images/check.png'

const P2 = () => {
  return (
    <div>
      <Row>
        <Col style={{
          marginLeft: '15%',
          marginTop: '10%',
          marginRight: '25%',
        }} >
          <h2>Features</h2>
          <p><img src={Check} height='25px' alt='' /> Word search </p>
          <p><img src={Check} height='25px' alt='' /> Word listing </p>
          <p><img src={Check} height='25px' alt='' /> Word deletion</p>
          <p><img src={Check} height='25px' alt='' /> custom word list</p>
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

export default P2