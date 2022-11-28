import React from 'react';
import { Link } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';

import '../../../styles/productCard.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {

   const {id, title, image01, price} = props.item;
    const dispatch = useDispatch()

    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

  return (
    <div className="product__item h-100">

        <div className="product__img">
            <img src={image01} alt="productimg" className='w-50' />
        </div>

        <div className="product__content">
            <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
            <div className=' d-flex align-items-center justify-content-between btnandpp'>
                <span className='product__price'>{price}<FaRupeeSign/></span>
                <div className='cart-btn'>
                    <button className='addToCart__btn' onClick={addToCart }>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;