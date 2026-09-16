import React from 'react'
import style from './signup.module.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={style.body}>
      <div className={style.signupcontainer}>
        <div className={style.formsection}>

          <div className={style.logo}>
            <div className={style.logoicon}>🛒</div>
            <span>DN Spurt</span>
          </div>

          <h1>Create your account</h1>

          <p className={style.subtitle}>
            Join us and start managing everything easily.
          </p>

          <form>

            <div className={style.namerow}>

              <div className={style.inputgroup}>
                <label>First Name</label>
                <input type="text" placeholder="First name" />
              </div>

              <div className={style.inputgroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Last name" />
              </div>

            </div>

            <div className={style.inputgroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className={style.inputgroup}>
              <label>Password</label>

              <div className={style.passwordbox}>
                <input type="password" placeholder="Create a password" />
                <span>👁</span>
              </div>
            </div>

            <div className={style.inputgroup}>
              <label>Confirm Password</label>

              <div className={style.passwordbox}>
                <input type="password" placeholder="Confirm your password" />
                <span>👁</span>
              </div>
            </div>

            <div className={style.terms}>
              <input type="checkbox" />
              <p>
                I agree to the
                <a href="#">Terms & Conditions</a>
              </p>
            </div>

            <button className={style.signupbtn} type="submit">
              Create Account
            </button>

            {/* <div className={style.divider}>
            <span></span>
            <p>Or continue with</p>
            <span></span>
          </div>

          <div className={style.socialbuttons}>

            <button type="button">
              🔴 Google
            </button>

            <button type="button">
              🔵 Facebook
            </button>

          </div> */}

            <p className={style.logintext}>
              Already have an account?
              <Link to='/login'>Login</Link>
            </p>

          </form>

        </div>
        <div className={style.infosection}>

          <div className={style.infocontent}>

            <span className={style.badge}>
              ✦ Welcome to DN Spurt
            </span>

            <h2>
              Everything you need,
              <span>in one place.</span>
            </h2>

            <p>
              Create your account and get access to a
              smarter, simpler way to manage your
              business and daily operations.
            </p>

            <div className={style.features}>

              <div className={style.feature}>
                <div class="feature-icon">✓</div>

                <div>
                  <h3>Simple Management</h3>
                  <p>Manage your activities from one dashboard.</p>
                </div>
              </div>

              <div className={style.feature}>
                <div class="feature-icon">⚡</div>

                <div>
                  <h3>Fast & Reliable</h3>
                  <p>Built to make your workflow faster.</p>
                </div>
              </div>

              <div className={style.feature}>
                <div className={style.featureicon}>🔒</div>

                <div>
                  <h3>Secure Account</h3>
                  <p>Your account and information stay protected.</p>
                </div>
              </div>

            </div>

          </div>

          <div className={style.circleone}></div>
          <div className={style.circletwo}></div>

        </div>

      </div>
    </div>
  )
}

export default Signup