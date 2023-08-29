'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.body);
console.table(document.head);

// creating new element

const message = document.createElement('div','Saea');
message.classList.add("cookie-message");
message.innerHTML='we use cookie for improved fucntionality .<button class="btn btn--close-cookie">Got it</button>';

const header = document.querySelector(".header");
header.append(message);

// on click delete element

document.querySelector('.btn--close-cookie').addEventListener('click',()=>message.remove());

//styles

message.style.backgroundColor = '#3438d';
message.style.width='80%';

console.table(window.getComputedStyle(message));


//Smooth Scrooling

const btnClick = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//old method
btnClick.addEventListener('click',(event) => {
  const scrolllim = section1.getBoundingClientRect();
  //window.scrollTo(scrolllim.left+window.pageXOffset,scrolllim.top+window.pageYOffset);

  window.scrollTo({
    left:scrolllim.left+window.pageXOffset,
    top:scrolllim.top+window.pageYOffset,
    behavior:'smooth'
  })
})