document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/people")
        .then(response => response.json())
        .then(data => {
            data.filter((person) => {
                const li = document.createElement('li');
                const ul = document.querySelector('ul');
                li.textContent = person.name;
                ul.appendChild(li);
                
                li.addEventListener('mouseover', () => {
                    const li = document.createElement('li');
                    const ul = document.querySelector('ul');
                    li.innerHTML = person.image;
                    ul.appendChild(li);
                    setTimeout(() => {
                        ul.removeChild(li);
                    }, 5000);
                })

                li.addEventListener('click', () => {
                    const h4 = document.createElement('h4');
                    const h5 = document.createElement('h5');
                    const div = document.querySelector('div');
                    h4.textContent = person.lifeYears;
                    h5.textContent = person.bio;
                    div.appendChild(h4);   
                    div.appendChild(h5);
                    setTimeout(() => {
                        div.removeChild(h4);
                        div.removeChild(h5);
                    }, 15000);
                })
            })
        })
})