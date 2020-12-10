import React,{useState} from "react";
import { Route,Switch ,useHistory} from 'react-router-dom'
import Login from './component/login'
import Register from './component/Register'
import Profile from './component/profile'
import "./App.css";
function App() {
  let history = useHistory();
  if(JSON.parse(localStorage.getItem("users"))===null||undefined){
    history.push('/')
    return (
      <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <div className="container">
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/profile" component={Profile} />
      </Switch>
      </div>
    </div>
    )
  }else{
    history.push('/profile')
    return (
      <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <div className="container">
      <Switch>
      <Route path="/profile" component={Profile} />
      </Switch>
      </div>
    </div>
    )
  }
  
}

export default App;
