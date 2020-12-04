document.querySelector('.animatie_knop').addEventListener('click', (e) => {
    document.querySelector('.valkje').classList.toggle('vlakje__naar-rechts')
})

setTimeout( () => {
    document.querySelector('.valkje').classList.toggle('vlakje__naar-rechts')  
}, 2000 )