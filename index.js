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
                    const p = document.createElement('p');
                    const div = document.querySelector('div');
                    h4.textContent = person.lifeYears;
                    p.textContent = person.bio;
                    div.appendChild(h4);   
                    div.appendChild(p);
                    p.style.textAlign = 'left'
                    setTimeout(() => {
                        div.removeChild(h4);
                        div.removeChild(p);
                    }, 15000);
                })
            })
        })
})