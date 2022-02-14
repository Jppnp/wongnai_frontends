import React from "react";
import { Slide } from 'react-slideshow-image';
import { Row, Col } from 'react-bootstrap';

function Content(){
    return(
        <div className="d-flex justify-content-center">
            <div className="card" style={{width : "50%", padding : 10}}>
                <Row>
                    <Col lg="5"><img src="https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg" style={{width : 300, borderRadius : 20}}></img></Col>
                        <Col>
                            <a className="link" href="https://www.wongnai.com/trips/travel-koh-chang"><h3><b>คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!</b></h3></a>
                            <Row>
                                <Col><p className="show-more">วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!\n\n“เกาะช้าง” จังหวัดตราด ที่เที่ยวทะเลใกล้กรุงเทพฯ สามารถเที่ยวกันได้ทุกฤดู เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน</p></Col>
                                <Col><a href="https://www.wongnai.com/trips/travel-koh-chang">อ่านต่อ</a></Col>
                            </Row>
                            <p className="tag">
                                หมวดหมู่:
                                <a href="#" className="tag-element">เกาะ</a>
                                <a href="#" className="tag-element">ทะเล</a>
                                <a href="#" className="tag-element">จุดชมวิว</a>
                            </p>
                            <br></br>
                                <img className="images" src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"></img>
                                <img className="images" src="https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg"></img>
                                <img className="images" src="https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg"></img>
                        </Col>
                </Row>
                
            </div>
        </div>
    );
}

export default Content;