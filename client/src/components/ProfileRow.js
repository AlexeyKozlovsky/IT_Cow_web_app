import './ProfileRow.css'

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function ProfileRow({ name, value }) {
    return (
        <Container className="data__row">
            <Row>
                <Col>{name}</Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}