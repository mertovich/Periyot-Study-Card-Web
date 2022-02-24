import React from 'react'
import {Col, Container } from 'react-bootstrap'
import '../App.css'

const BottomMenu = props => {
  return (
    <div>
      <Container className='text-center'>
        <Col>
        <button onClick={()=> props.p1()} className={props.selectPage === 0 ? 'bottom-menu-btn-active' :'bottom-menu-btn'}></button>
        <button onClick={()=> props.p2()} className={props.selectPage === 1 ? 'bottom-menu-btn-active' :'bottom-menu-btn'}></button>
        <button onClick={()=> props.p3()} className={props.selectPage === 2 ? 'bottom-menu-btn-active' :'bottom-menu-btn'}></button>
        </Col>
      </Container>
    </div>
  )
}

export default BottomMenu