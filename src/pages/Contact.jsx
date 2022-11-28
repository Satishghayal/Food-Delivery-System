import React from 'react';
import '../styles/contact.css';
import Helmet from '../components/Helmet/Helmet';
import Img00 from '../assets/images/a-4.jpg';
import { Container, Row,Col } from 'reactstrap';

import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';

import p1 from '../assets/images/product_01.1.jpg';
import p2 from '../assets/images/product_01.3.jpg';
import p3 from '../assets/images/product_01.jpg';
import p4 from '../assets/images/product_04.jpg';
import p5 from '../assets/images/product_08.jpg';
import p6 from '../assets/images/product_09.jpg';
import p7 from '../assets/images/product_2.1.jpg';
import p8 from '../assets/images/product_2.2.jpg';
import p9 from '../assets/images/product_3.3.jpg';
import p10 from '../assets/images/product_3.1.jpg';
import p11 from '../assets/images/product_3.2.jpg';
import p12 from '../assets/images/C1.jpg';
import p13 from '../assets/images/C3.jpg';
import p14 from '../assets/images/bread(1).png';
import p15 from '../assets/images/B1.png';

const Contact = () => {
  return (
    <Helmet title='Contact'>
      <h1 className='head text-center mt-3'>Admin-Biography</h1> 
       <section className='login py-3 bg-light'>
         <Container className='container'>
           <Row className='roww g-0'>

             <Col lg='5'>
               <img src={Img00} alt="" className='img-fluid' />
             </Col>

             <Col lg='7' className='text-center py-2'>

               <div className="centerr">
               <h1>Contact</h1>               
               <form action="" className='form'>
             <div className="text__filedd">
               <h6>UserEmail</h6>
               <span><FaEnvelope/></span>
               <input type="text" required />               
             </div>

             <div className="text__filedd">
               <h6>UserName</h6>
               <span><FaUser/></span>
               <input type="text" required />               
             </div>  
             <div className="text__filedd">
               <h6 className='mt-2'>Massege</h6>
               <textarea name="" id="" cols="25" rows="3" placeholder='Somthing Here..' className='area'></textarea>              
             </div>             

             <div className="sub__btnn">
                <button className='log__btnn' type='submit'>Send</button>
              </div>
             
             </form>
              </div> 
                <div className="social_icon">
                  <span className='icon_list'>
                    <FaWhatsapp className='ww'/>
                    <FaFacebook className='ff'/>
                    <FaInstagram className='ii'/>
                    <FaLinkedinIn className='ll'/>
                  </span>
                </div>                     
      
             </Col>

            <div className="copyright">
              <h6 className='text-center m-2'><span><FaCopyright/></span>Satish_Shivaji_Ghayal_2022 All Rights Reserved.</h6>
            </div>    

           </Row>
         </Container>
       </section>
    </Helmet>
  )
}

export default Contact;