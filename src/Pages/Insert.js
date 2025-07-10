import React, { useState } from 'react'
import myimg from '../Image/premium_vector-1682298505658-3c147b1222a4.avif'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
  const [input, setInput] = useState({})
  const handelchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInput(values => ({ ...values, [name]: value }))
  }
  const nevigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(input);
    const response = await fetch("http://localhost:8000/userdata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    nevigate('/data')
  }

  return (
    <>
      <div className='container-fluid py-5'>
        <div className='row py-5 ps-5'>
          <div className='col-7 ps-5'>
            <p className='fw-bold font text-secondary'>START FOR A FREE</p>
            <h1 className='pb-3 fw-bold'>Create New Account...</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-6'>
                  <div class="form-floating mb-3">
                    <input name='fname' value={input.fname} type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handelchange} />
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
                <div className='col-6'>
                  <div class="form-floating mb-3">
                    <input name='lname' value={input.lname} type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handelchange} />
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input name='city' value={input.city} type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handelchange} />
                <label for="floatingInput">City</label>
              </div>
              <div class="form-floating mb-3">
                <input name='email' value={input.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handelchange} />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input name='password' value={input.password} type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handelchange} />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="d-grid col-6 mx-auto my-4">
                <button class="btn  py-2 font mybtn" type="submit" >Submit...</button>
              </div>
            </form>
          </div>
          <div className='col-5'>
            <img src={myimg} alt="" className='img-fluid' style={{ height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Insert
