import React,{useEffect} from 'react'
import { Link,useHistory } from "react-router-dom";
import loginImage from '../images/signin-image.jpg'
import axios from "axios";
const Login = () => {
    const history=useHistory();
    const [user,setUser]=React.useState({
        username:"",password:""
    });

    const callLoginPage= async()=>{
        try{
            const res = await fetch('/login',{
              method:"GET",
              headers:{
            "Content-type":"application/json"
        },
            }
        );
        if(res.status!==200){
          throw new Error(res.error);
        }
    }
        catch(err){
         console.log(err);
        }
    
    }
    useEffect(() => {
    callLoginPage();
    }, [])


    function handleChange(event){
        const {name,value}=event.target;
          
          setUser(prevValue=>{
            return {
            ...prevValue,[name]:value
          }
        });
    }
    function handleClick(event){
        event.preventDefault();
        const {username,password}=user;
        axios({
            method: 'post',
            url: '/login',
            data: {
              username,password
            }
          }).then(function (response) {
            console.log(response);
                window.alert(response.data.message);
                history.push("/");
            
          }).catch((error)=>{
                if(error.response){
            console.log(error.response.status);
            if(error.response.status===401){
                console.log(error.response.data.error);
                window.alert(error.response.data.error);
            }else if(error.response.status===400){
                console.log(error.response.data.error);
               window.alert(error.response.data.error);
               }
             if(error.response.status===404){
               console.log("Page not found");
               window.alert("Page not found");
               history.push("/");
            }
          }
           });
          setUser({
          username:"",password:""
         });
         
    }
    
    return (
        <div class="main">
            <section class="sign-in" id="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={loginImage} alt="sing up image" /></figure>
                        <Link to="/Signup" class="signup-image-link">Create an account</Link>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign in</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={handleClick}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="your_name" placeholder="Your Name"  value={user.username}
                      onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" value={user.password}
                      onChange={handleChange}/>
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login
