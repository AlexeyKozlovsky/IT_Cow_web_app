import React from 'react'
import './ProfilePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ProfileRow from '../ProfileRow'
import surg from '../../resources/surgeon.jpg'


export default function ProfilePage() {
    return (
        <Container className="table">
            <Row>
                <Col sm={2} className="col">
                    <Row>
                        <Image src={surg} roundedCircle/>
                    </Row>
                    <Row>Иван Иванов</Row>
                    <Row></Row>

                    
                </Col>
                <Col sm={5} className="col">
                    <ProfileRow name="Имя" value="Иван Иванов"/>
                </Col>
            </Row>
        </Container>
    )
}