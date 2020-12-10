import React from "react";
import {useHistory } from "react-router-dom";
export default function Profile() {
    let history = useHistory();

  var user = JSON.parse(localStorage.getItem("users"));
  const loguot=()=>{
    localStorage.removeItem('users')
    history.push('/')
  }
  if(user===null){
    history.push('/')
    return <div></div>
  }else{
    return (
        <div>
          <h1 style={{ color: "#ffff" }}>Hello {user.fullname}</h1>
          <br />
          <h3 style={{ color: "#ffff" }}>Username: {user.username}</h3>
          <h3 style={{ color: "#ffff" }}>Phone: {user.phone}</h3>
          <button type="button" class="btn btn-outline-dark" style={{backgroundColor:'#181b1e',color:'#fff'}} onClick={loguot}>Log out</button>
        </div>
      );
  }
}
