document.addEventListener('load', () => {
    fetch('http://localhost:3000/people')
        .then(response => response.json())
        .then(data => console.log(data))
})