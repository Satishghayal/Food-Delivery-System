import React,{useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import hero from '../assets/images/product_3.1.jpg';
import '../styles/hero-section.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

import Category from '../components/UI/category/Category.jsx';

import '../styles/home.css';

import featureimg01 from '../assets/images/service-01.png';
import featureimg02 from '../assets/images/service-02.png';
import featureimg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/Products.js';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg04 from '../assets/images/category-03.png';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../assets/images/location.png';

import networkImg from '../assets/images/network.png';

import Testimonialslider from '../components/UI/slider/Testimonialslider.jsx';

const featureData = [
  {
    title:'Quick Delivery',
    imgUrl:featureimg01,
    decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iusto!"
  },
  {
    title:'Super Dine In',
    imgUrl:featureimg02,
    decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iusto!"
  },
  {
    title:'Easy Pick Up',
    imgUrl:featureimg03,
    decs: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iusto!"
  },
]

const Home = () => {

const [category, setCategory] = useState("ALL");
const [AllProducts, setAllProducts] = useState(products);



useEffect(() => {

  if(category === 'ALL'){

    setAllProducts(products)
  }

  if(category === 'BURGER'){

    const filterdProducts = products.filter(item=>item.category === 'Burger')
    setAllProducts(filterdProducts)
  }

  if(category === 'PIZZA'){

    const filterdProducts = products.filter(item=>item.category === 'Pizza')
    setAllProducts(filterdProducts)
  }

  if(category === 'BREAD'){

    const filterdProducts = products.filter(item=>item.category === 'Bread')
    setAllProducts(filterdProducts)
  }

  if(category === 'CHIKEN'){

    const filterdProducts = products.filter(item=>item.category === 'Chiken')
    setAllProducts(filterdProducts)
  }

  if(category === 'BIRYANI'){

    const filterdProducts = products.filter(item=>item.category === 'Biryani')
    setAllProducts(filterdProducts)
  }


},[category]
)


  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>HUNGRY?</span> Just wait <br/> food at<span> your door</span></h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatum, quod repellendus culpa voluptates amet !</p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                    <button className='order__btn d-flex align-items-center justify-content-between'>Order now <FaArrowRight/></button>

                    <button className='all__foods-btn'><Link to="foods">See all foods</Link></button>
                </div>

                <div className=' hero__service d-flex align-items-center gap-4 mt-3'>

                  <p className='d-flex align-items-center gap-2'><span className='shiping__icon'><FaCar className='ship_i'/></span>no shiping charge</p>

                  <p className='d-flex align-items-center gap-2'><span className='shiping__icon'><FaCheckCircle className='ship_i'/></span>100% source checkout</p>

                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img '>
                <img src={hero} alt="" className='img'/>
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <section className='pt-0'>
      <Category/>
      </section>

      <section>
        <Container>
          <Row>
           <Col lg='12 text-center'> 
            <h5 className='feature__subtitle mb-4'>What we service</h5>
            <h2 className='feature__title'>Just site back at home</h2>
            <h2 className='feature__title'>We will <span>take care</span></h2>
            <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium!</p>
            <p className='feature__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, perspiciatis. {" "}</p>
           </Col>

           {
             featureData.map((item,index) =>(
               <Col lg='4' md='4' key={index} className='mt-5'>
                 <div className='feature__item text-center p-4 px-5 py-3'>
                   <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3'  />
                   <h5 className='fw-bold mb-3'>{item.title}</h5>
                   <p>{item.decs}</p>
                 </div>
               </Col>
             ))
           }

           <Col lg='4' md='4'>
              <div className='feature__item'>

              </div>
           </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
             <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all_btn  ${category === 'ALL' ? 'foodBtnActive' : ''}`} 
                onClick={()=> setCategory('ALL')}>All</button>


                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`}
                 onClick={()=> setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt="foodcate"/>Burger
                  </button>


                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`}
                 onClick={()=> setCategory('PIZZA')}>
                  <img src={foodCategoryImg02} alt="foodcate"/>Pizza
                </button>


                  <button className={`d-flex align-items-center gap-2 ${category === 'BIRYANI' ? 'foodBtnActive' : ''}`} 
                  onClick={()=> setCategory('BIRYANI')}>
                  <img src={foodCategoryImg04} alt="foodcate"/>Biryani
                  </button> 

                  <button className={`d-flex align-items-center gap-2 ${category === 'CHIKEN' ? 'foodBtnActive' : ''}`} 
                  onClick={()=> setCategory('CHIKEN')}>
                  <img src={foodCategoryImg04} alt="foodcate"/>Chiken
                  </button>  

              </div>
            </Col>

            {
              AllProducts.map((item) =>(
                <Col lg='3' md='4' key={item.id} className='mt-5'>
                  <ProductCard item={item}/>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
              <Col lg='6' md='6'>
                <img src={whyImg} alt="why-food-hub" className='w-100'/>
              </Col>

              <Col lg='6' md='6'>
                <div className="why-food-hub">
                  <h2 className='food-hub-title mb-4'>Why <span>Food-HUB?</span></h2>
                  <p className='food__hub-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere provident, magni in non possimus quis ad, vitae, quod tempore quia! Ullam et ea suscipit qui! Veritatis quae aut harum!</p>

                <ListGroup className='mt-5'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us-title d-flex align-items-center gap-2'><FaCheck className='fi'/> Fresh and 
                    testy 
                    Foods</p>
                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus!</p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us-title d-flex align-items-center gap-2'><FaCheck className='fi'/> Quality 
                    Support </p>
                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus!</p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose-us-title d-flex align-items-center gap-2'><FaCheck className='fi'/> Order From 
                    any Location{" "}
                    </p>
                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus!</p>
                  </ListGroupItem>

                </ListGroup>

                </div>
              </Col>

          </Row>
        </Container>
      </section>

  <section>
    <Container>
      <Row>      

        <Col lg='6' md='6'>
          <div className='testimonial '>
            <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
            <h2 className='testimonial__title mb-4'>What our <span>Customers</span> are saying</h2>
            <p className='testimonial__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolor pariatur quas porro, sapiente ut perferendis maiores architecto nihil minima doloribus minus tempore, dolorum officiis quidem, esse deleniti natus consectetur!</p>

              <Testimonialslider/>

          </div>
        </Col>

        <Col lg='6' md='6'>
          <img src={networkImg} alt="networkimg" className='w-100'/>
        </Col>

      </Row>
    </Container>
  </section>

    </Helmet>
  )
}

export default Home;