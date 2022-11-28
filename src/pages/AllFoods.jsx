import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection.jsx';
import { Container, Row, Col} from 'reactstrap';

import { FaSearch } from 'react-icons/fa';

import products from '../assets/fake-data/Products';
import ProductCard from '../components/UI/product-card/ProductCard';

import ReactPaginate from 'react-paginate';

import '../styles/all-foods.css';
import '../styles/pagination.css';

const AllFoods = () => {

const [searchTerm, setSearchTerm] = useState(' ');

const searchedProduct = products.filter((item) =>{
  if(searchTerm.value === "") return item;
  if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return item;
})

const [pageNumber, setPageNumber] = useState(0);
const productPerPage = 8
const visitedPage = pageNumber * productPerPage
const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
const pageCount = Math.ceil(searchedProduct.length / productPerPage)

const changePage = ({selected}) =>{
  setPageNumber(selected)
}

  return (
    <Helmet title='All-foods'>
      <CommonSection title='All foods'/>

      <section>
        <Container>
          <Row>

          <Col lg='6' md='6' sm='6' className='text'>
             <div className="w-50">
              <h6>Select The Choice</h6>
             </div>
            </Col>

            <Col lg='6' md='6' sm='6' className='search-box mb-4'>
             <div className="search__widget w-50">
               <input type="text" placeholder='Search item..' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
               <span className='search-icon'><FaSearch className='icon'/></span>
             </div>
            </Col>

           
            
            {
              displayPage            
              .map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  {" "}
                  <ProductCard item={item} />
                </Col>
              ))}

              <div className="">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel='Prev'
                  nextLabel='Next'
                  containerClassName='paginationBttns'
                />
              </div>

          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default AllFoods;