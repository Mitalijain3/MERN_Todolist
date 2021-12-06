import React from 'react';
import { Route,Switch } from "react-router-dom";
import Navbar from './Navbar'
import Home from "./Home"
import ToDo from "./ToDo"
import Contact from "./Contact"
import Login from "./Login"
import Signup from "./Signup"
import Logout from "./Logout"
import Errorpage from "./Errorpage"
function App(){
    
    return (
    <div> 
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/ToDo">
            <ToDo/>
        </Route>
         <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/signup">
            <Signup/>
        </Route>
        <Route path="/logout">
            <Logout/>
        </Route>
        <Route>
            <Errorpage/>
        </Route>
        </Switch>
    </div>);
}

export default App;