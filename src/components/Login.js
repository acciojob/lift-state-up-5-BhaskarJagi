import React from "react";

const Login = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className="child">
      {!isLoggedIn && (
        <form onSubmit={() => setIsLoggedIn(true)}>
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="text" id="password" />
          </div>
          <button type="">Login</button>
        </form>
      )}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default Login
