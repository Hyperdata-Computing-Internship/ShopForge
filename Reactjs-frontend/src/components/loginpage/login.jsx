import React from 'react'
// import style from './login.module.css'

const Login = () => {
  return (
    <div class="login-container">

      <div class="left-section">
        <img src="" alt="Dashboard illustration" />
      </div>

      <div class="right-section">

        <div class="logo">
          <div class="logo-icon">🛒</div>
          <span>DN Spurt</span>
        </div>

        <h1>Welcome Back</h1>
        <p class="subtitle">Please login to your account</p>

        <form>

          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <label for="password">Password</label>
          <div class="password-box">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <span>👁</span>
          </div>

          <div class="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div class="divider">
            <span></span>
            <p>Or Login With</p>
            <span></span>
          </div>

          <div class="social-buttons">
            <button type="button">
              🔴 Google
            </button>

            <button type="button">
              🔵 Facebook
            </button>
          </div>

          <p class="signup">
            Don't have an account?
            <a href="#">Sign up</a>
          </p>

        </form>

      </div>

    </div>

  )
}

export default Login