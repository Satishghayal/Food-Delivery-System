import React from 'react';
import Slider from 'react-slick';

import ava01 from '../../../assets/images/a-1.jpg';
import ava02 from '../../../assets/images/a-2.jpg';
import ava03 from '../../../assets/images/a-3.jpg';

import '../../../styles/slider.css';

const Testimonialslider = () => {

  const settings = {
      dots:true,
      autoplay: true,
      infinite: true,
      speed:3000,
      autoplaySpeed:3000,
      swipeToSlide:true,
      slidesToShow:1,
      slidestoScrool:1

  }

  return (  
     <Slider {...settings}>
        
        <div className='review__main'>
             <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus qui placeat dolorem harum hic quo atque quia accusantium nemo consectetur voluptate quis iure officia sapiente quos, in eaque? Dolorum!</p>

            <div className='slider__content d-flex align-items-center gap-3'>
              <img src={ava02} alt="avatar" className='rounded' />
              <h6>Atul_Dagabaj</h6>
            </div>
        </div>

        <div className='review__main'>
           <p className='review__text'>
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus qui placeat dolorem harum hic quo atque quia accusantium nemo consectetur voluptate quis iure officia sapiente quos, in eaque? Dolorum!"
            </p>

           <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar" className='rounded' />
                <h6>Ganesh_Pawar</h6>
           </div>

        </div>

        
        <div className='review__main'>
             <p className='review__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus qui placeat dolorem harum hic quo atque quia accusantium nemo consectetur voluptate quis iure officia sapiente quos, in eaque? Dolorum!</p>

            <div className='slider__content d-flex align-items-center gap-3'>
              <img src={ava03} alt="avatar" className=' rounded' />
              <h6>Shubham_Sarak</h6>
            </div>
        </div>
  
    </Slider>
  )
}

export default Testimonialslider