import React from "react";

export const languages = {
  spanish: {
    currentLanguage: "español",
    main: {
      title: "Trabajos en Nueva York",
      jobPostButton: "Busco Personal",
      seeksJobButton: "Busco Trabajo",
      seeking: "busca",
      seeking2: "busca trabajo de",
      seeking3: "Se busca",
      seeking4: "ofrece servicios de",
      filterDefault: "Todo Nueva York",
      filterOtherArea: "Otra area en Nueva York"
    },

    jobForm: {
      question1: "Como se llama su negocio?",
      question2: "Que busca?",
      question3: "Cuanto paga?",
      question4: "Paga en cheque o cash?",
      question5: "Cual es el horario?",
      question6: "Direccion del local:",
      question7: "En que area se encuentra?",
      question8: "Numero de celular? (opcional)",
      question9: "Por quien preguntar?",
      question10: "Algo que desee agregar?",
      question11: "Quiero que mi anuncio sea azul",
      jobFormButton: "Listo",
      payType1: "Cash",
      payType2: "Cheque",
      payType3: "Cash y Cheque",
      filterOtherArea: "Otra area en NY",
      title: "Encuentre al mejor personal para su negocio"
    },

    jobConfirm: {
      title: "Su anuncio",
      name: "Nombre:",
      position: "Puesto:",
      payment: "Salario:",
      payType: "Paga en:",
      schedule: "Horario:",
      address: "Direccion:",
      area: "Area:",
      phone: "Numero:",
      contact: "Preguntar por:",
      extraInfo: "Mas informacion:",
      button: "Publicar"
    },

    personModal: {
      name: "Nombre:",
      status1: "Busca:",
      status2: "Servicios de:",
      experience: "Experiencia:",
      schedule: "Horario:",
      area: "Area:",
      phone: "Numero:",
      extraInfo: "Mas info:"
    },
    jobPayPage: {
      title: "Usted a marcado anuncio azul",
      text1:
        "Los anuncios azules se destacan entre el resto y se mantienen al top de la lista por 48 horas.",
      text2:
        "Si desea encontrar al mejor personal lo mas rapido posible, esta es la mejor opcion para usted.",
      buttonNO: "Quiero un anuncio gratis y comun",
      buttonYES: "Pagar $10",
      contactInfo: "Si tiene preguntas, quejas o sugerencias, porfavor envie un correo a me@wilfredocasas.com"
    }
  },

  english: {
    currentLanguage: "english",
    main: {
      title: "Jobs in New York",
      jobPostButton: "Post a Job",
      seeksJobButton: "Looking for work",
      seeking: "needs",
      seeking2: "is looking for a job as",
      seeking3: "Looking for",

      seeking4: "offers services as",
      filterDefault: "All NY",
      filterOtherArea: "Other area in NY"
    },
    jobForm: {
      question1: "Name of your company",
      question2: "What position are you looking to fill?",
      question3: "How much do you pay?",
      question4: "Pay in check or cash?",
      question5: "Schedule",
      question6: "Address",
      question7: "Area",
      question8: "Phone Number (optional)",
      question9: "Contact name",
      question10: "Something you'd like to add?",
      question11: "I want my post to be blue and on top",
      jobFormButton: "Finish",
      payType1: "Cash",
      payType2: "Check",
      payType3: "Cash and Check",
      filterOtherArea: "Other area in NY",
      title: "Fill out the form and find staff in seconds"

    },
    jobConfirm: {
      title: "Your post",
      name: "Name:",
      position: "Looking for:",
      payment: "Salary:",
      payType: "Pays in:",
      schedule: "Schedule:",
      address: "Address:",
      area: "Area:",
      phone: "Number:",
      contact: "Ask for:",
      extraInfo: "More info:",
      button: "Publish"
    },

    personModal: {
      name: "Name:",
      status1: "Looking to work as:",
      status2: "Offers service of:",
      experience: "Experience:",
      schedule: "Schedule:",
      area: "Area:",
      phone: "Number:",
      extraInfo: "More info:"
    },

    jobPayPage: {
      title: "You chose TOP post",
      text1: "TOP posts are blue and stay on top of the list for 48 hours.",
      text2:
        "If you are looking for top staff as quickly as possible, this is what you need.",
      buttonNO: "I want a free and normal post",
      buttonYES: "Pay $10",
      contactInfo: "If you have questions, suggestions or complains, please send an email to me@wilfredocasas.com"

    }
  }
};

export const LanguageContext = React.createContext(languages.spanish);
