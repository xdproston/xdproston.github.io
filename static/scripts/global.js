document.getElementsByName('button').forEach(value => {
    value.addEventListener('click', listener => {
        alert('Вы нажали на кнопку!')
    })
})