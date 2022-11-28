import React from 'react';

const Helmet = (propes) => {
        document.title="Food Ordering App - " + propes.title;
      return (
                <div className='w-100'>
                    {propes.children}
                </div>
  )
}

export default Helmet