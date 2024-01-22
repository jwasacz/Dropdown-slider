const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')

function showCard(){
    cards.forEach(card=>{
        console.log(this)
        card.classList.remove('active')
        this.classList.add('active')
    })

    handelBgColor(this)
}


const handelBgColor = card => { 
    const season = card.getAttribute('data-season')
    body.setAttribute('data-bg', season)
 }

cards.forEach(card=>card.addEventListener('click', showCard))