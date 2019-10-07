import * as crypto from 'crypto';
import axios from "axios";

const algorithm = 'aes-256-cbc';
const password = navigator.userAgent;


function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}
let firebase = window.firebase;
window.firebase = undefined;

export function sessionInit() {
    var firebaseConfig = {
        apiKey: "AIzaSyBc9EBqrwhKjXxTfqid1Q_EX_uMwgJqUyg",
        authDomain: "jobdirecto-47460.firebaseapp.com",
        databaseURL: "https://jobdirecto-47460.firebaseio.com",
        projectId: "jobdirecto-47460",
        storageBucket: "",
        messagingSenderId: "469717395289",
        appId: "1:469717395289:web:4781ee2fe08fa705ee0e48"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    axios.interceptors.request.use(function (config) {
        if (isLogged()) {
            config.headers['Authorization'] = isLogged().uid;
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
}

export function isLogged() {
    return firebase.auth().currentUser;
}

export function logOut() {
    firebase.auth().signOut()
}
export function loginWithEmail(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(console.log).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.error(errorCode, errorMessage)
    });

}
export function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        axios.defaults.headers.common['Authorization'] = user.uid;
        console.log(user);
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.error(errorCode, errorMessage, email, credential)
    });
}

export function loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        axios.defaults.headers.common['Authorization'] = user.uid;
        console.log(user);
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.error(errorCode, errorMessage, email, credential)
    });
}