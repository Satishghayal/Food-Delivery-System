import React,{useRef,useEffect} from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaAlignJustify } from 'react-icons/fa';
import '../../styles/header.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartUiActions } from '../../store/shopping-cart/CartUiSlice';


const nav__links =[
  {
    Display:"Home",
    path:'/Home'
  },
  {
    Display:"Foods",
    path:'/foods'
  },
  {
    Display:"Cart",
    path:'/cart'
  },
  
  {
    Display:"Contact",
    path:'/Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null);

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()

  const toggleCart = () =>{
    dispatch(cartUiActions.toggle())
  }

  useEffect(() => {

    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink')
      }
      else
      {
        headerRef.current.classList.remove('header__shrink')
      }
    })

    return () => window.removeEventListener('scroll')

  },[])
  
  return (
   <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo"/>
            <h5>FOOD-HUB</h5>
          </div>
           <div className="navigation">
             <div className="menu d-flex align-item-center gap-5">
                {
                  nav__links.map((item,index) => (
                    <NavLink to={item.path} key={index}
                        className={navClass => navClass.isActive ? 'active__menu' : ''}                    
                    >{item.Display}</NavLink>
                  ))
                }
             </div>
           </div>

           {/*============= nav right icon =============*/}
            <div className="nav-right d-flex align-item-center gap-4">
              <span className="cart__icon " onClick={toggleCart}>
               <FaShoppingBag className='i'/>
              <span className="cart__badge">{totalQuantity}</span></span>
              <span className="user">
                <Link to='/login'><FaUser className='i'/></Link>
              </span>
                  <span className="mobile__menu"><FaAlignJustify className='i'/></span>
            </div>
        </div>
      </Container>
   </header>
  )
}

export default Header;