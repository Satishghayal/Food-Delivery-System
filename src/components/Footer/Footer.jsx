import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=' footer__logo'>
              <img src={logo} alt='logo'/>
              <h5>FOOD-HUB</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis voluptas aut esse voluptatem ad corporis assumenda adipisci.</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title '>Delivery Time</h5>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                  <span>Monday - Friday</span>
                  <p>10am - 12pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Saturday - Sunday</span>
                  <p>All Time</p>
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>  Contact</h5>
              <ListGroup className='delivery__time-list'>

              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                  <p>Location: AT/POST:Kasegaon, Tal-Pandharpur, Dist Solapur,413304.</p>                 
                </ListGroupItem>

                <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                  <span>Phone No: 8530001232</span>                 
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email: satishsp1232@gmail.com</span>
                  
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>  NewsLatter</h5>
            <p>Subscribe Our NewsLatter</p>
            <div className="news__latter">
              <input type="email" placeholder='Enter Your Email' />
              <span><FaTelegramPlane className='i'/></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>

          <Col lg='6' md='6'>
          <p className='copyrighgt__text'><span><FaRegCopyright/></span>Satish_Ghayal_2022 All Rights Reserved</p>
          </Col>

          <Col lg='6' md='6'>
          <div className='social_links d-flex align-item-center gap-4 justify-content-end'>
            <p className='m-0'>Follow: </p>
            <span><Link to=''><FaFacebook className='sl' id='fb'/></Link></span>
            <span><Link to=''><FaWhatsapp className='sl' id='wh'/></Link></span>
            <span><Link to=''><FaInstagram className='sl' id='in'/></Link></span>
            <span><Link to=''><FaLinkedin className='sl' id='li'/></Link></span>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;