
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {

  let [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App
