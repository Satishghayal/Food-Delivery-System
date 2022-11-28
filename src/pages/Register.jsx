import React,{useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

import '../styles/login.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Register = () => {

const signupNameRef = useRef();
const signupPasswordRef = useRef();
const signupEmailRef = useRef();

const submitHandler = e=>{
        e.preventDefault()
}

  return (
    <Helmet title='Login'>
    <section className='container'>
       <Container>
         <Row>
           <Col>
             <div className="center">
               <h1>SignUp</h1>
               <form action="" onSubmit={submitHandler}>

             <div className="text__filed">
               <h6>UserEmail</h6>
               <span><FaEnvelope/></span>
               <input type="text" required ref={signupEmailRef}/>               
             </div>

             <div className="text__filed">
               <h6>UserName</h6>
               <span><FaUserAlt/></span>
               <input type="text" required ref={signupNameRef}/>               
             </div>

             <div className="text__filed">
               <h6>Password</h6>
               <span><FaLock/></span>
               <input type="password" required ref={signupPasswordRef}/>               
             </div>             

             <div className="sub__btn">
                <button className='log__btn' type='submit'>SignUp</button>
              </div>
             
             </form>

             <Link to="/login" className='sign-up'>
               Allready an Account ? LogIn
             </Link>
             
             </div>
           </Col>
         </Row>
       </Container>
    </section>
    </Helmet>
  )
}

export default Register;