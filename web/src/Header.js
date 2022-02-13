import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'

function Header(){
    return (
        <div style={{padding : 10}}>
            <Container>
                    <Card className="card border-primary">
                        <Card.Body>
                            <Row>
                                <Col xs lg="3"><h2 style={{color : "#0080ff"}}>เที่ยวไหนดี</h2></Col>
                                <Col><input className="form-control" style={{width : 500}} placeholder="ค้นหาสถานที่ ..."></input></Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
      
    );
}

export default Header;