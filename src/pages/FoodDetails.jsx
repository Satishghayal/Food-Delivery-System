import React,{useState, useEffect} from 'react';
import products from '../assets/fake-data/Products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';


import '../styles/product-details.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {

const [tab, setTab] = useState("desc") 
const {id} = useParams()
const product = products.find(product => product.id === id)
const [previmg, setPrevImg] = useState(product.image01)
const dispatch = useDispatch();
const { title, price, category, desc, image01} = product;

const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setPrevImg(product.image01);
  }, [product]);

  return (
    <Helmet title='product_details'>
      <CommonSection title={title}/>

      <section>
        <Container>
          <Row>

            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="img__item mb-3" onClick={()=>setPrevImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>
                <div className="img__item mb-3" onClick={()=>setPrevImg(product.image02)}>
                  <img src={product.image02} alt="" className='w-50'/>
                </div>
              </div>
              <div className="img__item " onClick={()=>setPrevImg(product.image03)}>
                  <img src={product.image03} alt="" className='w-50'/>
                </div>
            
            </Col>
            
            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={previmg} alt="" className='w-100'/>
              </div>
            </Col>


            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className='product__title mb-3'>{title}</h2>
                <p className='product__price'>
                {" "}
                  Price: <span>{price}</span>
                </p>
                <p className='category mb-5'>
                  Category: <span>{category}</span>
                </p>

                <button className='addToCart__btn'  onClick={addItem}>Add To Cart</button>
              </div>
            </Col>

            <Col>
              <div className="tabs d-flex align-items-center gap-5 py-2">
                  <h6 className={` ${tab === "desc" ? "tabs__active" : ""}`}
                  onClick={() => setTab("desc")}>
                  Description</h6>

                  <h6  className={` ${tab === "rev" ? "tabs__active" : ""}`}
                  onClick={() => setTab("rev")}>
                  Review</h6>

              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Mohmmad Inamdar</p>
                    <p className="user__email">mohmmadinamdar@gmail.com</p>
                    <p className="feedback__text">Amazing</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Atul Dagabaj</p>
                    <p className="user__email">atualdagabaj@gmail.com</p>
                    <p className="feedback__text">Very Good Product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Shubham Sarak</p>
                    <p className="user__email">shubhamsarak@gmail.com</p>
                    <p className="feedback__text">Nice</p>
                  </div>
                </div>
              )}
            </Col>  

             <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}


            </Row>
        </Container>
      </section>

      
    </Helmet>
  )
}

export default FoodDetails;