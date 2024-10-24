const element = document.querySelector('.moreItemsNav');
const button = document.getElementById('moreButton');

button.addEventListener('click', () => {
    element.classList.toggle('open');
});