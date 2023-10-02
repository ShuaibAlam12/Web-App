import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  })
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const eventSubmit = (event) => {

    alert(`My name is ${data.fullname} my mobile no is ${data.phone}`);
    console.log("shuainb");
  };


  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>
          Contact Us
        </h1>
      </div>

      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={eventSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"

                  name='fullname'
                  value={data.fullname}
                  onChange={inputEvent}


                  placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"

                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}


                  placeholder="Mobile No" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"

                  name='email'
                  value={data.email}
                  onChange={inputEvent}


                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control"
                  name='msg'
                  value={data.msg}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='row d-flex justify-content-between'>
                <div className="col-6">
                  <button className="btn btn-outline-primary"

                    type="submit">Submit form</button>

                </div>
                <div className='col-6'>
                  <a
                    href="https://wa.me/+9170544199552"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size='3x' />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact;