import React from "react";

import { LanguageContext } from "./languageContext";

class LanguageButton extends React.Component {
  render() {
    return (
      <div>
        {this.context.title}
        <button onClick={this.props.changeLanguage}>
          {this.context.currentLanguage === "spanish" ? "english" : "spanish"}
        </button>
        ;
      </div>
    );
  }
}

LanguageButton.contextType = LanguageContext;

export default LanguageButton;
