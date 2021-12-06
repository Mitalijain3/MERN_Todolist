// eslint-disable-next-line no-use-before-define
import React from "react";
import { Link,useHistory } from "react-router-dom";
import SignupImage from '../images/signup-image.jpg'
import axios from "axios";

const Signup = () => {
  const history=useHistory();
  const [data,setData]=React.useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const [registerdata,setRegisterData]=React.useState([{
    username:"",
    email:"",
    password:"",
    confirmPassword:""
}]);
  function handleChange(event){
      const {name,value}=event.target;
        
        setData(prevValue=>{
          return {
          ...prevValue,[name]:value
        }
      });
  }
  function handleClick(event){
    event.preventDefault();
        setRegisterData(prevdata=>{return[...prevdata,data]}
        );
        setData({
          username:"",
          email:"",
          password:"",
          confirmPassword:""
      });
      const {username,email,password,confirmPassword}=data;
      axios({
        method: 'post',
        url: '/signup',
        data: {
          username,email,password,confirmPassword
        }
      }) .then(function (response) {
        if(response.status===201){
          window.alert(response.data.message);
          history.push('/');
        }else if(response.status===200){
          console.log(response.data.error);
          window.alert(response.data.error);
        }
      }).catch( (error)=>{
        if (error.response) {
          console.log(error.response.status);
            if(error.response.status===403){
            console.log(error.response.data.error);
            window.alert(error.response.data.error);
            }
            else if(error.response.status===404){
          console.log("Page not found");
          window.alert("Page not found");
            history.push("/");
        }
      }
      });
    }
  return (
    <div>
      <div className="main">
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form onSubmit={handleClick}
                  method="POST"
                  className="register-form"
                  id="register-form">
                  <div className="form-group">
                    <label for="name">
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="name"
                      placeholder="Your Name"
                      value={data.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="pass"
                      placeholder="Password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="re-pass">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="re_pass"
                      placeholder="Repeat your password"
                      value={data.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={SignupImage} alt="sing up image" />
                </figure>
                <Link to="/Login" className="signup-image-link">
                  I am already member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup
