import React, { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'
import logo from "../S__8667140.jpg";
import "../App.css";
export default function Register() {
    let history = useHistory();
  const [password, setpassword] = useState(null);
  const [username, setusername] = useState(null);
  const [Fullname, setFullname] = useState(null);
  const [Phone, setPhone] = useState(0);
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };
  const handleUsername = (event) => {
    setusername(event.target.value);
  };
  const handleFullname = (event) => {
    setFullname(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = () => {
    const user = {
        "username":username,
        "password":password,
        "fullname":Fullname,
        "phone":Phone
    };
    console.log(user);
    const url ='http://localhost:5000/Register'
    axios.post(url,user).then((res)=>{
        if(res.status===200){
            history.push("/");
        }
        console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
  };
  return (
    <div>
      <div style={{ backgroundColor: "#000", height: "100vh" }}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
              justifyItems: "center",
            }}
          >
            <div
              className="col-sm-8 col-xs-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img className="col-sm-12 col-lg-8" src={logo} alt="logo"></img>
            </div>
            <div className="col-sm-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#e5e5e5",
                    textAlign: "center",
                    borderRadius: "15px 15px 0px 0px",
                  }}
                >
                  Register
                </div>
                <div className="card-body col-xs-12">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputusername"
                        name="username"
                        aria-describedby="emailHelp"
                        onChange={handleUsername}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handlePassword}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                      Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputusername"
                        name="fullname"
                        aria-describedby="fullname"
                        onChange={handleFullname}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                      Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputusername"
                        name="phone"
                        aria-describedby="phone"
                        onChange={handlePhone}
                      />
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto">
                      <button
                        type="button"
                        className="btn btn-dark lg"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <Link to="/" style={{textDecoration:'none'}}>
                        <samp style={{ fontSize: "10px",color:'#959595' }}>
                          Already have an account? <samp style={{color:'#9bc5d6',textDecoration:'none'}}>Login here</samp>
                        </samp>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
