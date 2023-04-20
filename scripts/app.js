"use strict";
let sitNumber;
let htmlTitle, htmlPicture, password;
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

const showSituation = function(){
  let htmlStringTitle='';
  let htmlStringPicture='';
  sitNumber = 1;
  // sitNumber = document.querySelector()
  htmlStringTitle += `<h1>Situation ${sitNumber}</h1>`;
  htmlStringTitle += `<img src='./img/png/situation${sitNumber}.png'></img>`;
  htmlTitle.innerHTML = htmlStringTitle;
  htmlPicture.innerHTML = htmlStringPicture;
}

const init = function () {
  htmlTitle = document.querySelector('.js-game__title');
  htmlPicture = document.querySelector('.js-game__picture');
  console.info("JS running");
  // password = makePass(10);
  // showPass(password);
  // setTimeout(function(){
  //   showPass('');
  // }, 3000);
  showSituation();
};
// js-game__next
document.addEventListener("DOMContentLoaded", init);
