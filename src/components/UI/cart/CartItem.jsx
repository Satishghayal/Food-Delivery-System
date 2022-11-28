import React from 'react';
import { ListGroupItem } from 'reactstrap';

import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import '../../../styles/cart-item.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

import { FaRupeeSign } from 'react-icons/fa';

const CartItem = ({item}) => {

const {id, title, price, image01, quantity, totalPrice} = item;

const dispatch = useDispatch()

const incrementItem = () =>{
  dispatch(cartActions.addItem({
    id,
    title,
    price,
    image01
  }))
};

  const decreasItem = () =>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () =>{
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <ListGroupItem className='border-0 cart__item'>
       <div className="cart__item-info d-flex gap-2">
           <img src={image01} alt="productimg" />

           <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
              <div>
              <h6 className='cart__product-title'>{title}</h6>
              <p className='d-flex align-items-center gap-5 cart__product-price'>
                  <span>Qty: {quantity}</span> <span className='pricee'>{totalPrice}<FaRupeeSign className='ruppee'/></span></p>

                <div className='d-flex align-items-center justify-content-between inc__dec-btn'>
                    <span className='inc__btn' onClick={incrementItem}><FaPlus/></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='dec__btn' onClick={decreasItem}><FaMinus/></span>
                </div>
 
              </div>
              <span className='delete__btn' onClick={deleteItem}><FaRegTrashAlt/></span>
           </div>
       </div>
    </ListGroupItem>
  )
}

export default CartItem;