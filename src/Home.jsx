import React from 'react';
import edit from '../src/images/img4.jpg';
import Common from './Common';
const Home = () => {
  return (
    <>
     <Common 
      name='Grow your bussines with '
      btname='Get Started'
      visit='/service'
      imgsrc={edit}
     />
    </>
  )
}

export default Home;