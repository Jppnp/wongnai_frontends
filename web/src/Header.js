import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'

function Header({setKeyword}){

    function handleChange(event) {
        setKeyword(event.target.value)
    }

    return (
        <div style={{padding : 10}}>
            <Container>
                    <Card className="card">
                        <Card.Body>
                            <Row>
                                <Col xs lg="3"><h1 style={{color : "#0080ff", fontSize : "36px"}}>เที่ยวไหนดี</h1></Col>
                                <Col><input className="form-control" onChange={handleChange} style={{width : 500, textAlign : 'center'}} placeholder="หาที่เที่ยวแล้วไปกัน..."></input></Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
      
    );
}

export default Header;