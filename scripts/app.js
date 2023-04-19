"use strict";
let htmlPassword, password;
const makePass = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
};

const showPass = function(password) {
  let htmlString = '';
  htmlString += `<h1>${password}</h1>`;
  htmlPassword.innerHTML = htmlString;
}

const init = function () {
    htmlPassword = document.querySelector('.js-password');
    console.info("JS running");
    password = makePass(10);
    showPass(password);
    setTimeout(function(){
      showPass('');
    }, 3000);
};

document.addEventListener("DOMContentLoaded", init);
