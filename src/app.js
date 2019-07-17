import React, { contextType } from "react";
import axios from "axios";
import { JobConfirm } from "./jobConfirm.js";
import { JobForm } from "./jobForm.js";
import { PersonForm } from "./personForm.js";
import { ServiceForm } from "./serviceForm.js";

import { PostType } from "./postType.js";

import PersonPay from "./personPay.js";
import { PersonConfirm } from "./personConfirm.js";
import { Jobs } from "./jobs.js";
import LoginOrRegister from "./loginorregister.js";
import Login from "./login.js";
import Register from "./register.js";
import UrgentChecked from "./urgentChecked.js";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { LanguageContext, languages } from "./languageContext";
import LanguageButton from "./languageButton";

function initializeReactGA() {
  ReactGA.initialize("UA-129656531-1");
  ReactGA.pageview("/homepage");
}

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: languages.spanish
    };
    this.toggleLanguage = () => {
      this.setState(state => ({
        languages:
          state.languages === languages.spanish
            ? languages.english
            : languages.spanish
      }));
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <LanguageContext.Provider value={this.state.languages}>
            <LanguageButton changeLanguage={this.toggleLanguage} />
            <Route path="/urgentChecked" component={UrgentChecked} />
            <Route path="/loginorregister" component={LoginOrRegister} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/jobConfirm" component={JobConfirm} />
            <Route
              path="/job/:id"
              render={props => <JobDetails {...props} key={props.match.url} />}
            />
            <Route exact path="/" component={Jobs} />
            <Route path="/personForm" component={PersonForm} />
            <Route path="/serviceForm" component={ServiceForm} />

            <Route path="/jobForm" component={JobForm} />
            <Route  path="/personPay" component={PersonPay}/>
            <Route  path="/postType" component={PostType} />
            <Route
              exact="exact"
              path="/personConfirm"
              component={PersonConfirm}
            />
          </LanguageContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}
