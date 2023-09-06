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

  /*window.scrollTo({
    left:scrolllim.left+window.pageXOffset,
    top:scrolllim.top+window.pageYOffset,
    behavior:'smooth'
  })*/

  //new method 
  section1.scrollIntoView({
    behavior:'smooth'
  })
})


//Event Delegation

document.querySelector('.nav__links').addEventListener('click',(event) => {
  if(event.target.classList.contains('nav__link')){
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    })
  }
})


// Tab Component

const tab = document.querySelectorAll('.operations__tab');
const tabContianer = document.querySelector('.operations__tab-container');
const tabcontent = document.querySelectorAll('.operations__content');

tabContianer.addEventListener('click',(e)=>{
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) return;

    console.log(tab);
    tab.forEach(t => t.classList.remove('operations__tab--active'))
    tabcontent.forEach(t=>t.classList.remove('operations__content--active'))

    clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  })


//Sticky 

const intialCords = section1.getBoundingClientRect();
window.addEventListener('scroll',()=>{
  if(window.scrollY > intialCords.top){
    document.querySelector('.nav').classList.add('sticky')}
  else{
    document.querySelector('.nav').classList.remove('sticky')
  }
    
  })


//Intersection Observer API

const obsCallback = (entries,Oberver) => {
entries.forEach((entry) => console.log(entry))
}

const obsoptions = {
  root:null,
  threshold:0.1
}
const Oberver = new IntersectionObserver(obsCallback , obsoptions);
Oberver.observe(section1);


//Revealing Elements 
const allSection =document.querySelectorAll('.section');
const revealObserver = function(entries,observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  else entry.target.classList.remove('section--hidden');
}
const sectionObserver = new IntersectionObserver(revealObserver ,{
  root:null,
  threshold:0.15
})
allSection.forEach((section) => {sectionObserver.observe(section);
section.classList.add('section--hidden');

})


//Lazy Loading

const imgTarget  = document.querySelectorAll('img[data-src]')
const loadImg = function(entries,observer) {
  const[entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
}
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0
})
imgTarget.forEach(img => imgObserver.observe(img));


//DomContentLoaded

document.addEventListener('DOMContentLoaded' , (e) => console.log(e));

window.addEventListener('load',(e) => console.log(e));

window.addEventListener('beforeunload',(e)=>{
  e.preventDefault();
  console.log(e);

  e.returnValue='';
})