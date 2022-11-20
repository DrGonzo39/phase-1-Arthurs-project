document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/people")
        .then(response => response.json())
        .then(data => {
        // code that renders Jay's associates names onto page
            data.forEach((person) => { 
                const li = document.createElement('li');
                const ul = document.querySelector('ul');
                li.textContent = person.name;
                ul.appendChild(li);
                
                li.addEventListener('mouseover', () => { 
                    renderBook(person)
                })

                li.addEventListener('click', () => {
                    renderYearsAndBio(person)
                }) 
            })
        })
        // code that renders a person's biography title upon mouseover
        function renderBook(person) {
            const li = document.createElement('li');
            const ul = document.querySelector('ul');
            li.textContent = person.book;
            ul.appendChild(li);
            setTimeout(() => {
                ul.removeChild(li);
            }, 5000); 
        }
        // code that shows a person's life years and biography into my text box upon click
        function renderYearsAndBio(person) {
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
        }
    // code that submits user comments and questions to the server when they enter text and submit the form
    const form = document.getElementById('comments-questions');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = document.getElementById('comment-box')
        const userText = text.value;
        fetch("http://localhost:3000/userSubmits", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body :JSON.stringify({  "quesComm" : userText})
        })
    })
    
})

