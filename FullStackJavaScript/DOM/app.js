// const body = document.body;

// document.body.addEventListener('click', () => {
//     body.innerHTML = `<h1>Hello, WOrld!</h1>`;
// });

const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
// const items = document.querySelectorAll('li');
// const highlights = document.querySelectorAll('.highlight');

// for ( const highlight of highlights ) {
//     highlight.style.backgroundColor = 'cornsilk';
// }

// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = 'orchid';
// }

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
});

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }    
});

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
});
