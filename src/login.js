import React from "react";
import axios from "axios";


export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.facebookLogin = this.facebookLogin.bind(this);
    this.error;
  }

  facebookLogin() {
      console.log("facebooki");
      axios.get("/loginFacebook");

  }

  render() {
    return (
      <div className="login-container">
{/*        <h1 className="heading-1">Login</h1>
        {this.state.error && (
          <div className="error">Email and/or password is incorrect.</div>
        )}
        <form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>*/}
<h2>Porfavor registrese con su cuenta de facebook</h2>
<p>Cuando cree una cuenta podra crear anuncios y borrarlos tambien</p>
<button class="loginBtn loginBtn--facebook"><a id="facebookLoginLink" href="/loginFacebook" >Login with facebook</a></button>
      </div>
    );
  }
}
