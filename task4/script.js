sss.addEventListener('click', function (event) { 
    event.preventDefault(); 
    const newsss = prompt('Введите текст'); 
    const userTextField = document.querySelector('#sss'); 
    sss.textContent = newsss;
})