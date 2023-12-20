import "./login.css";

const Login = () => {
  return (
    <div className="quora_loginPage">
      <div className="quora_loginSection">
        <div className="quora_loginHeader">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-dc1b777005095235798e5dbdb6b710dd"
            alt=""
            className="quora_loginLogo"
          />
          <p className="quora_loginHeaderpara">
            A place to share knowledge and better understand the world
          </p>
        </div>
        <div className="quora_loginInputboxSection">
          <div className="quora_loginwithemail_orfacebook">
            <p className="quora_privacyStatement">
              By continuing you indicate that you agree to Quora’s{" "}
              <span className="quora_privacyText">Terms of Service</span> and{" "}
              <span className="quora_privacyText">Privacy Policy.</span>
            </p>
            <div className="loginWith_gmail">
              <img
                src="https://www.svgrepo.com/show/380993/google-logo-search-new.svg"
                alt=""
                className="gmail_logo"
              />
              <span className="gmail_loginText">Continue with Google</span>
            </div>
            <div className="loginWith_faceBook">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="facebook_logo"
              />
              <span className="facebook_loginText">Continue with Facebook</span>
            </div>
            <span className="Quora_signupWithemail">Sign up With email</span>
          </div>
          <div class="login_vertical-line"></div>
          <div className="input_loginSection">
            <div className="quora_loginText_container">
              <span className="login_text">Login</span>
              <hr class="login_horizontal-line" />
            </div>
            <form className="login_form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="loginInput_Email"
                name="email"
                placeholder="Your Email"
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="loginInput_Password"
                name="password"
                placeholder="Your password"
              />
              <div className="login_lowerSection">
                <div className="quora_forgotPassword">
                  <span className="forgot_password">Forgot Password?</span>
                </div>
                <div className="quora_Loginbtn">
                  <button type="submit" className="login_button" value="login">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
