"use strict";
let htmlPassword;
const makePass = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log(result);
    let htmlString = '';
    htmlString += `<p>${result}</p>`;
    htmlPassword.innerHTML = htmlString;
};

const init = function () {
    htmlPassword = document.querySelector('.js-password');
    console.info("JS running");
    makePass(10);
};


document.addEventListener("DOMContentLoaded", init);