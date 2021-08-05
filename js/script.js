// Cards 

const cards = [
    {
        title: 'Bjarke Ingels',
        imgUrl: './media/Bjarke.jpg',
        description:'stands out for finding a balance between traditional architecture and avant-garde architecture.'
    },

    {
        title: 'Gloria Kloter',
        imgUrl: './media/Gloria.jpg',
        description:'is a German architect with studies based in Berlin and Bali.'
    },

    {
        title: 'Alexis Dornier',
        imgUrl: './media/alexis-dornier.jpg',
        description: 'is recognized by top magazines worldwide, she has been seen in several magazines and blogs, which ranked her as the most suitable and reliable architect for any given project.'
    },

    {
        title: 'Tatiana Bilbao',
        imgUrl: './media/Tatiana-Vilbao.jpg',
        description:'is a Mexican architect founder of Tatiana Bilbao ESTUDIO founded in 2004.'
    },

]


function createCards() {
const main = document.getElementById('architect');
var allCards = [];
for (let i = 0; i < cards.length; i += 1) {
    allCards.push('<div class="winer_child1 flex">'
                     +`<img src="${cards[i].imgUrl}"width="90px" height="95px" alt="placeholder">`
                    +'<div>'
                        +`<h4>${cards[i].title}</h4>`
                        +`<p>${cards[i].description}</p>`
                    +'</div>'               
                +'</div>')

                main.innerHTML = allCards
}
}
createCards();


const menu = document.querySelector('.open');
menu.addEventListener('click', () => {document.getElementById('mobile-menu').classList.add('active') })
const close = document.querySelector('.close');
close.addEventListener('click', () => {document.getElementById('mobile-menu').classList.remove('active')})
const ulClose = document.querySelector('.ul-close');
ulClose.addEventListener('click', () => {document.getElementById('mobile-menu').classList.remove('active')})