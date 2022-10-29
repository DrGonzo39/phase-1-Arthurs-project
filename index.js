document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/people")
        .then(response => response.json())
        .then(data => {
            data.filter((person) => {
                console.log(person.name)
                const li = document.createElement('li');
                const ul = document.querySelector('ul');
                li.textContent = person.name;
                ul.appendChild(li);
            })
        })
})