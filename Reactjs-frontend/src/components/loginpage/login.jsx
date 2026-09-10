import React from 'react'
import style from './login.module.css'
import { useState } from "react";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={style.logincontainer}>

      <div className={style.leftsection}>
        <img src='../public/loginpageimage.jpg' alt="Dashboard illustration" />
      </div>

      <div className={style.rightsection}>

        <div className={style.logo}>
          <div className={style.logoicon}>🛒</div>
          <span>ShopForge</span>
        </div>

        <h1>Welcome Back</h1>
        <p className={style.subtitle}>Please login to your account</p>

        <form>

          <label className={style.email}>Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <label for="password">Password</label>
          <div className={style.passwordbox}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <button type="button" onClick={togglePassword}>
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className={style.forgot}>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <p className={style.signup}>
            Don't have an account?
            <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>

  )
}

export default Login