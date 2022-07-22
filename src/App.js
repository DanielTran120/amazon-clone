import React, { useEffect } from "react"
import './App.css';
import Header from './header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Routes}
from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment"
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import {loadStripe, Elements} from "@stripe/react-stripe-js";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when app componeent loads, kind of like if statement
    auth.onAuthStateChanged((authUser) =>{
      console.log("The user is >>>", authUser);

      if (authUser){
        //user was logged in/is logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
        
      }
    })
  }, [])
  
  return (
    //BEM naming convention
    <Router>

      <div className="app">


        <Routes>

          <Route path = "/login" element = {<Login/>}>

          </Route>

          <Route path = '/' element = {[<Header/>,<Home/>]}/>

          <Route path = '/checkout' element = {[<Header/>, <Checkout/>]}/>

          <Route path = '/payment' element = {[<Header/>,<Payment/>]}/>

        </Routes>

        {/* Home */}
        
      </div>      
    </Router>
  );
}

export default App;
