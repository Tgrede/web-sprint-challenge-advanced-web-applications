import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  const history = useHistory()
  const [formValues, setFormValues] = useState(initialState)
  const [errors, setErrors] = useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const loginHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', formValues)
    .then((res) => {
      console.log(res)
      console.log(res.data.payload)
      localStorage.setItem('token', JSON.stringify(res.data.payload))
      history.push('/protected')
    })
    .catch((err) => {
      console.log(err.response.data.error)
      setErrors(err.response.data.error)
    })
  }

  useEffect(()=>{
  const token =  JSON.parse(localStorage.getItem('token'))
  console.log(token)
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      
        <h1> Welcome to the Bubble App! </h1>
        
        <p>Build a login page here</p>
        <form onSubmit={loginHandler}>
          <label htmlFor='username'>Username:</label>
          <input 
          type='text'
          name='username'
          onChange={handleChange}
          value={formValues.username}
          />
          <label htmlFor='password'>Password:</label>
          <input
          type='password'
          name='password'
          onChange={handleChange}
          value={formValues.password} 
          />
          <p>{errors}</p>
          <button>Login</button>
        </form>
      
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.