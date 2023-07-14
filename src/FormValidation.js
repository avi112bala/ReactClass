import React, { useState } from 'react'

const FormValidation = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [err,setErr]=useState(false);


const loginhandler =(e)=>{
        if(name.length<3){
            alert('please enter the corret name');
        }
        else if(password.length<3){
            alert('please enter correct password');
        }else if(email.length<3){
            alert('please enter the correct email')
        }
        else{
            alert('all good')
        }
        e.preventDefault();
}

function userHandeler(e) {
  let item = e.target.value;
  if (item.length < 3) {
    setErr(true);
  } else {
    setErr(false);
  }
  setErr(item);
}

function emailhandler(e) {
  let item = e.target.value;
  if (item.length < 3) {
    setEmail(true);
  } else {
    setEmail(false);
  }
  setEmail(item);
}

function passwordHandler(e) {
  let item = e.target.value;
  if (item.length < 3) {
    setPassword(true);
  } else {
    setPassword(false);
  }
  setPassword(item);
}


  return (
    <div>
      <h1>Form validation</h1>
      <form onSubmit={loginhandler}>
        <input
          type="text"
          placeholder="username"
          onChange={userHandeler}
        ></input>
        <br />
        <input
          type="email"
          placeholder="type your email"
          onChange={passwordHandler}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={emailhandler}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export  default FormValidation