import React from 'react';
import Common from './Common';
import edit from '../src/images/img3.jpg';
const About = () => {
  return (
    <Common
      name='Welcome to about page'
      btname='Contact Us'
      visit='/contact'
      imgsrc={edit}
    />
  )
}

export default About;