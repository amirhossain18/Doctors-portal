import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calander from './Calander';
import cover from '../../image/appointment.jpg'
const Appointment = () => {
const [appointmentDate, setAppoinmentDate] = useState(new Date())



    return (
        <div className="container">
        
          <Row>
          <p>Appointment Page</p> 
          <Col>
          <Calander
           appointmentDate={appointmentDate}
           setAppoinmentDate={setAppoinmentDate}
           ></Calander>
          
          </Col>
        <Col>
        <img className='img-fluid' src={cover} alt="cover"/>
        
        </Col>
          
          </Row>
        </div>
    );
};

export default Appointment;