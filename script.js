let current = document.getElementById('current');
let previous = document.getElementById(' previous');
let btns = document.querySelectorAll('.cal');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.delete');
let clearAll = document.querySelector('.clearAll');

btns.forEach(cal => {
    cal.addEventListener('click', () => {
        let content = cal.getAttribute('data-number');
        current.textContent += content;
    })
})
clearAll.addEventListener('click', () => {
  current.textContent = '';
  previous.textContent = '';
})
equal.addEventListener('click', () => {
    let expression = current.textContent;
    current.textContent = eval(expression);
    previous.textContent = eval(expression);
})
clear.addEventListener('click', () => {
    let str = current.textContent;
    let arr = str.split('');
    arr.pop();
    current.textContent = arr.join('');
})
