let counter = 0;

const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const span = document.getElementById('counter');

increaseBtn.addEventListener('click', () => {
   counter++;
   
   span.innerText = counter;
});

decreaseBtn.addEventListener('click', () => {
    counter--;

    span.innerText = counter;
})

