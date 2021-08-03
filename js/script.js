// Cards 

const cards = [
    {
        title: 'Bjarke Ingels',
        imgUrl: './media/Bjarke.jpg',
        description:'stands out for finding a balance between traditional architecture and avant-garde architecture.'
    },

    {
        title: 'Gloria Kloter',
        imgUrl: './media/Gloria.jpeg',
        description:'is a German architect with studies based in Berlin and Bali. His architectural philosophy is to combine and reformulate design methods for each design task. He grew up with the influence of aviation and engineering.'
    },

    {
        title: 'Alexis Dornier',
        imgUrl: './media/alexis-dornier.jpg',
        description: 'is recognized by top magazines worldwide, she has been seen in several magazines and blogs, which ranked her as the most suitable and reliable architect for any given project. Thanks to more than 15 years of national and international architectural and design experience, Kloter can design any large or small project at a given time.'
    },

    {
        title: 'Tatiana Bilbao',
        imgUrl: './media/Tatiana-Vilbao.jpg',
        description:'is a Mexican architect founder of Tatiana Bilbao ESTUDIO founded in 2004.'
    },

    {
        title: 'Raffaello Rosselli',
        imgUrl: './media/raffaello_rosselli.jpg',
        description: 'redefines and reinvents materials, including those that would otherwise be overlooked. The design process is based on material experimentation, which influences design practice at all scales, from small pavilions to large-scale developments.'
    },

    {
        title: 'Ma Yansong',
        imgUrl: './media/01_ma-yansong_full.jpg',
        description:'Founder of the innovative architecture firm MAD Architects, Ma Yansong (born November 26, 1975) has helped give China a name on the international architectural scene.'
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