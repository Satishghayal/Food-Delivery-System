import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/cart.css';

import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { cartActions } from '../store/shopping-cart/cartSlice';

const Cart = () => {

  const cartItems= useSelector(state=> state.cart.cartItems)

  const totalAmount = useSelector(state => state.cart.totalAmount)
    
return <Helmet title='Cart'>
    <CommonSection title='Your Cart'/>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='main__table'>
             {
               cartItems.length === 0 ? <h5 className='text-center'>Your Cart IS Empty</h5> : <table className='table table-bordered'>
               <thead>
                 <tr className='text-center table__head'>
                   <th>Image</th>
                   <th>Product Name</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                 {
                   cartItems.map((item=> <Tr item={item} key={item}/>
                  ))}
               </tbody>
             </table>
             }

             <div className="mt-4">
               <h6>SubTotal: 
                 <span className='cart__subtotal'> {totalAmount}
                 </span><FaRupeeSign/>
                </h6>
               <p>Taxes and sipping will calculate at checkout</p>
               <div className='cart__page-btn '>

                 <button className="btn btn-info me-4"><Link to='/foods'>Continue Shopping</Link></button>

                 <button className="btn btn-primary"><Link to='/checkout'>Proceed To Checkout</Link></button>

               </div>
             </div>
            </Col>
          </Row>
        </Container>
      </section>
</Helmet>

}
const Tr = (props) =>{

const  {id, image01, title, price, quantity} =props.item

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

const deleteItem =() =>{
  dispatch(cartActions.deleteItem(id))
}

  return <tr>
    <td className='text-center cart__img-box'>
      <img src={image01} alt=""  />
    </td>
    <td className='text-center'>{title}</td>
    <td className='text-center price'>{price} <FaRupeeSign className='price__rupee-icon'/></td>

    <td className='text-center'>        
      
      <span className='dec-btn m-3' onClick={decreasItem}><FaMinus/>
      </span>
      {quantity}
      <span className='inc-btn m-3' onClick={incrementItem}><FaPlus/>
        </span>

    </td>

    <td className='text-center'><FaRegTrashAlt className='cart__item-del' onClick={deleteItem}/></td>
  </tr>
}

export default Cart;