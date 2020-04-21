'use strict';

const form = document.querySelector('.book__form');

const addOnSubmit = (element) => {
  return element.addEventListener('submit', ev => {
    ev.preventDefault();
    ev.target.reset();
  });
};

addOnSubmit(form);
