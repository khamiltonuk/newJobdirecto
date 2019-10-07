import React from "react";
import axios from "axios";
import { LanguageContext } from "../../components/Language/LanguageContext";
import { BodyComponent } from "../../components/Body/BodyComponent";
import { loginWithFacebook, loginWithGoogle, loginWithEmail } from "../../utils/sessions";



export default class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.facebookLogin = this.facebookLogin.bind(this);
        this.error;
    }

    facebookLogin() {
        loginWithFacebook()
        //axios.get("/loginFacebook");
    }
    googleLogin() {
        loginWithGoogle();
    }
    emailLogin(){
        loginWithEmail("gustavoaglatorre@gmail.com","123456789");
    }

    render() {
        return (
            <BodyComponent toggleLanguage={this.props.navigation.toggleLanguage}>
                <div className="container">
                    <h2 className="heading-1">{this.context.login.title}</h2>
                    <p className="text">{this.context.login.text}</p>
                    {/* <div className="facebookContainer">
                        <button   ><a id="facebook-button" onClick={_ => this.googleLogin()} >{this.context.login.button}</a></button>
                    </div>
                    <div className="facebookContainer">
                        <button   ><a id="facebook-button" onClick={_ => this.emailLogin()} >{this.context.login.button}</a></button>
                    </div> */}
                    <div className="facebookContainer">
                        <button   ><a id="facebook-button" onClick={_ => this.facebookLogin()} >{this.context.login.button}</a></button>
                    </div>
                </div>
            </BodyComponent>
        );
    }
}

LoginController.contextType = LanguageContext;
