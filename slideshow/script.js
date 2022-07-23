'use strict';

const images =[
  {'id': '1', 'url': './img/photo1.jpeg'},
  {'id': '2', 'url': './img/photo2.jpeg'},
  {'id': '3', 'url': './img/photo3.jpeg'},
  {'id': '4', 'url': './img/photo4.jpeg'},
  {'id': '5', 'url': './img/photo5.jpeg'},
  {'id': '6', 'url': './img/photo6.jpeg'},
  {'id': '7', 'url': './img/photo7.jpeg'},
  {'id': '8', 'url': './img/photo8.jpeg'},
  {'id': '9', 'url': './img/photo9.jpeg'},
  {'id': '10', 'url': './img/photo10.jpeg'},
  {'id': '11', 'url': './img/photo11.jpeg'},
  {'id': '13', 'url': './img/photo13.jpeg'},
]

const containerItems = document.querySelector('#container-items');


const loadImages = ( images, container ) => {
  images.forEach ( image => {
      container.innerHTML += `
          <div class='item'>
              <img src='${image.url}'
          </div>
      `
  })
}

loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
  const lastItem = items[items.length -1];
  containerItems.insertBefore( lastItem, items[0]);
  items = document.querySelectorAll('.item');
}
const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore( lastItem, items[0] );
  items = document.querySelectorAll('.item');
}



document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
console.log('oi');