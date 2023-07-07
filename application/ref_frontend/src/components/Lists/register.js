import axios from 'axios';
import React, { useState } from 'react'

const Register = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  
  const signUp = () => {
    const userCredential = {
      email: userInfo.email,
      password: userInfo.password,
      username: userInfo.username
    }
    {console.log(userCredential)}
    axios.post("http://localhost:8000/api/register", userCredential).then(response => {
      if (response.status === 201) {
        console.log('User Successfully to Sign up')
        window.location.href = "/"
      } else {
        console.log('User Failed toSign up')
      }
    })
  }
  return (
    <div className={props.className}>
      <form>
        <label>
          Email:
          <input type="email" name="email" onChange={handleOnChange}/>
          Username:
          <input type="text" name="username" onChange={handleOnChange} />
          Password:
          <input type="password" name="password" onChange={handleOnChange} />
        </label>
        <button onClick={signUp}>Register</button>
      </form>
    </div>
  )
}

export default Register
