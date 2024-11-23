const background = document.querySelector('.background');
const rabbit = document.querySelector('.objects__rabbit');
const bird = document.querySelector('.objects__bird');
const rabbitClickable = document.querySelector('.rabbit__clickable');
const birdClickable = document.querySelector('.bird__clickable');

const lamp = document.querySelector('.lamp__image');
const light = document.querySelector('.light');
const figures = document.querySelector('.objects__figures');

let canRestore = false;

background.addEventListener('click', () => {
   if (canRestore) {
      background.classList.remove('remove');
      background.classList.add('restore');
      canRestore = false;
   } else {
      background.classList.remove('restore');
      background.classList.add('remove');
      canRestore = true;
   }
});

lamp.addEventListener('mousedown', () => {
   lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
   lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
   light.classList.toggle('on');
   figures.classList.toggle('display');
});

rabbitClickable.addEventListener('click', () => {
    rabbitClickable.classList.add("hide");
    birdClickable.classList.remove("hide");

    rabbit.classList.add('hide');
    bird.classList.remove('hide');
});

birdClickable.addEventListener('click', () => {
    rabbitClickable.classList.remove("hide");
    birdClickable.classList.add("hide");

    bird.classList.add('hide');
    rabbit.classList.remove('hide');
});