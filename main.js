let counter = 0
const btn = document.getElementById("btn");

btn.addEventListener('click', () => { 
    counter += 1;
    div.innerText = 'Number of likes = ${counter}'
});