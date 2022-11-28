import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import '../styles/checkout.css';

const Checkout = () => {
  return (
    <Helmet title='Payment'>
      <CommonSection title='Payment'/>
       <section>
         <Container>
           <Row>
             <Col lg='5' md='6'>
               <div className="wrapper">
                 <div className="payment">
                   <h2>Payment Geteway</h2>
                    <div className="form">

                      <div className="cardd">
                        <label htmlFor="">Card Holder Name</label> 
                        <input type="text" className='input' name='card-holder' placeholder='Enter Name'/>
                      </div>

                      <div className="cardd">
                        <label htmlFor="" className="labell">Card Number: </label>
                        <input type="text" className='input' name='card-holder' placeholder='Enter Card Number..'/>
                      </div>

                      <div className="card__grp">

                         <div className="cardd__item">
                           <label>Expiry Date: </label>
                           <input type="text" className='input' name='expiry-date' placeholder='00 / 00'/>
                          </div>

                          <div className="card__item">
                           <label>CVC: </label>
                           <input type="text" className='input' name='cvc' placeholder='000'/>
                          </div>

                      </div>

                      <div className="pay">Pay</div>

                    </div>
                 </div>
               </div>
             </Col>
           </Row>
         </Container>
       </section>
    </Helmet>
  )
}

export default Checkout