import React from "react";

export const languages = {
  spanish: {
    currentLanguage: "spanish",
    title: "Trabajos en Nueva York"
  },

  english: {
    currentLanguage: "english",
    title: "Jobs in New York"
  }
};

export const LanguageContext = React.createContext(languages.spanish);
