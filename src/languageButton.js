import React from "react";
import moment from "moment";

function LanguageButton({ changeLanguage, currentLanguage }) {
  if (currentLanguage === "Español") {
    moment.locale("es");
  } else {
    moment.locale("en");
  }
  return (
    <button
      className="outline-button"
      id="translateButton"
      onClick={changeLanguage}
    >
      {currentLanguage}
    </button>
  );
}

export default LanguageButton;
