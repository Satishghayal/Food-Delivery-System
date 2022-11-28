import React,{useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

import '../styles/login.css';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Login = () => {

const loginNameRef = useRef();
const loginPasswordRef = useRef()

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
               <h1>LogIn</h1>
               <form action="" onSubmit={submitHandler}>
             <div className="text__filed">
               <h6>UserEmail</h6>
               <span><FaEnvelope/></span>
               <input type="text" required ref={loginNameRef}/>               
             </div>

             <div className="text__filed">
               <h6>Password</h6>
               <span><FaLock/></span>
               <input type="password" required ref={loginPasswordRef}/>               
             </div>             

             <div className="sub__btn">
                <button className='log__btn' type='submit'>login</button>
              </div>
             
             </form>

             <Link to="/register" className='sign-up'>
               Create an Account ? SignUp
             </Link>
             
             </div>
           </Col>
         </Row>
       </Container>
    </section>
    </Helmet>
  )
}

export default Login;