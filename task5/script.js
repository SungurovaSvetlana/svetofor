let input = document.querySelector('input')
let button = document.querySelector('button')
let duplicateField = document.querySelector('#duplicateField')

input.addEventListener('input', function(event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
})

button.addEventListener('click', function(event) {
    console.log(duplicateField.textContent)
})