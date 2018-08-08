document.querySelector('input').addEventListener('input', (e) => {
    const value = e.target.value;
    document.querySelector('.output').innerHTML = value;
})