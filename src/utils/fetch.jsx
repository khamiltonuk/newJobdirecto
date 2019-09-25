import {setSession} from './session';

let headers = {};
let beforeSendFns = [];


export function _fetch(url, opts={}) {
    return new Promise( (res, rej)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(opts.method || 'get', url);
        for (var k in opts.headers||{})
            xhr.setRequestHeader(k, opts.headers[k]);
        
        Object.keys(headers).forEach(k=>{
            xhr.setRequestHeader(k, headers[k]);
        })
        beforeSendFns.forEach(e=>{
            e(xhr);
        })

        xhr.onload = e => res(JSON.parse(e.target.responseText));
        xhr.onerror = rej;
        if (xhr.upload && opts.onProgress)
            xhr.upload.onprogress = opts.onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
        
        let body = opts.body;
        if(typeof body == "object" ){
            
            body = objectToFormData(body);
        }
        xhr.send(body);
    });
}

export function _fetchAddHeaders(key, value){
    headers[key] = value;
}

export function beforeSend(fn){
    beforeSendFns.push(fn);
}

function objectToFormData(obj, form, namespace) {

    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {

            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File,
            // use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

                objectToFormData(obj[property], fd, formKey);

            } else {
                fd.append(formKey, obj[property]);
            }

        }
    }

    return fd;

};