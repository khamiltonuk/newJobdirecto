import { _fetchAddHeaders, beforeSend } from "./fetch";
import * as crypto from 'crypto';

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

export function sessionInit(){
    beforeSend((xhr)=>{
        let t = getSession();
        if(t){
            xhr.setRequestHeader('Authorization', 'Bearer ' + t);
        }
    })
}

export function setSession(token, timeExpire) {
    let data = {
        token,
        timeExpire
    }
    localStorage.setItem("Token", encrypt(JSON.stringify(data)));
}

export function destroySession(){
    localStorage.removeItem("Token");
}

export function getSession() {
    let hashtoken = localStorage.getItem("Token");
    try {
        let token = JSON.parse(decrypt(hashtoken));
        if (new Date().getTime() > token.timeExpire) {
            localStorage.removeItem("Token");
            return null;
        }
        return token.token;
    } catch (e) {
        localStorage.removeItem("Token");
        return null;
    }
}