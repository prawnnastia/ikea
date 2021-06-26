var imgArray = [];
for (var i = 0; i < 19; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/lack/lack-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    '🌎 ', 
    '...',
    'DIY Maltische für unsere Kleinen zum malen, basteln und spielen. Tische: Ikea Lack Beistelltisch. Malrolle + Rollenhalterung: Ikea Mala. Stühle: Ikea Kritter. Behälter: Ikea Sunnersta ',
    '🌎 👉🏼',
    '🌎 ',
    'It’s so nice when big sister builds lego cars for him. I built a simple base for him and he was happy to add on and make it his own. This kid loves vehicles with wheels. ',
    'Montessori at home • Na #pedagogia Montessori, a ideia em criar para a criança um ambiente com a mesa de comer e uma #rotina para as refeições é de estimular a independência, #liberdade e espontaneidade: a criança senta-se no lugar que escolher e se sentir confortável, serve-se água quando tem sede, come/prepara um snack quando tem fome.',
    '...',
    'Même pas une semaine plus tard et c’est fini ! J’adore le résultat et je m’attaque aux huisseries intérieures.',
    'Work from our show -Lost and Found- Front - Work by Tillie @brain.junk involving mass produced furniture from IKEA',
    'One of our favorite #campinghacks : Attaching a #kelty carport canopy to our pop-up canopy for an impromptu playroom for the kids. We bring along a #lacktable from @ikeausa since they are so lightweight and easy to assemble.',
    'Nasz balkon :-)',
    '...',
    '...',
    'When Lack is facing the street, it clearly wants to go for a walk.',
    'Toisen raskauden alussa kuvittelin viettäväni seesteistä vauva-aikaa ainakin pari kuukautta kotosalla vauvan kanssa kun esikoinen olisi perhepäivähoidossa. Nyt on elämä aivan erilaisessa tilanteessa kun uskoin! Asumme omassa talossa, missä on vielä muutto & remppa kaaos ja pikku A ei saa edes mennä hoitoon. Päivän panikoinnin jälkeen on taas tuntunut täysin sille että näin kaikkien asioiden kuuluikin mennä. Onneksi meillä on nyt oma piha minne mennä tutkimaan ja leikkimään keskenämme, vaikkakin sinne lähteminen ei vielä aamulla suju ongelmitta. Onneksi toinen lapsemme on jo syntynyt, eikä minun tarvitse murehtia valitsenko puolison vai doulan mukaan synnytykseen. Onneksi olen nyt äitiyslomalla eikä minun tarvitse murehtia miten maailman tilanne vaikuttaa töihini, mitä ei voisi tehdä etänä. Kaiken kaaoksen keskellä koitan keskittyä positiivisuuteen ❤️✨🏡',
    'Zuzu is IKEA study nook hack on a budget in a rented apartment!',
    'Passion palettes 🔨 Lack 2.0',
    'Mini tawashi ✌️',
];

var infoPosArray = [
    {
        width: '35vw',
        height: '27vw',
        top: '11vw', 
        left: '32vw', 
    }, 
    {
        width: '20vw',
        height: '18vw',
        top: '18vw', 
        left: '28vw', 
    },
    {
        width: '44vw',
        height: '26vw',
        top: '23vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '37vw',
        top: '12vw', 
        left: '27.5vw', 
    },
    {
        width: '46vw',
        height: '37vw',
        top: '9vw', 
        left: '27vw', 
    },
    {
        width: '32vw',
        height: '24vw',
        top: '26vw', 
        left: '29vw', 
    },
    {
        width: '26vw',
        height: '23vw',
        top: '26vw', 
        left: '18vw', 
    },
    {
        width: '25vw',
        height: '20vw',
        top: '19vw', 
        left: '29vw', 
    },
    {
        width: '36vw',
        height: '18vw',
        top: '32vw', 
        left: '23vw', 
    },
    {
        width: '27vw',
        height: '32vw',
        top: '18vw', 
        left: '19vw', 
    },
    {
        width: '34vw',
        height: '30vw',
        top: '20vw', 
        left: '32vw', 
    },
    {
        width: '24vw',
        height: '23vw',
        top: '27vw', 
        left: '17vw', 
    },
    {
        width: '35vw',
        height: '36vw',
        top: '10vw', 
        left: '27vw', 
    },
    {
        width: '40vw',
        height: '32vw',
        top: '18vw', 
        left: '25vw', 
    },
    {
        width: '35vw',
        height: '40vw',
        top: '10vw', 
        left: '28vw', 
    },
    {
        width: '30vw',
        height: '38vw',
        top: '12vw', 
        left: '20vw', 
    },
    {
        width: '40vw',
        height: '28vw',
        top: '21vw', 
        left: '25vw', 
    },
    {
        width: '35vw',
        height: '36vw',
        top: '11vw', 
        left: '31vw', 
    },
    {
        width: '44vw',
        height: '44vw',
        top: '5vw', 
        left: '27.5vw', 
    },
];


var slidesEl = document.querySelector('.embla__container');
imgArray.forEach(function(imgPath, imgIndex) {
    var counter = 0;
    var slideEl = document.createElement("div");
    slideEl.classList.add('embla__slide');
    var imgEl = document.createElement ('img');
    imgEl.style.width = '100%';
    imgEl.src = imgPath;
    var infoEL = document.createElement("div");
    infoEL.classList.add('info');
    infoEL.innerHTML = infoArray[imgIndex];
    var infoElPosition = infoPosArray[imgIndex];
    infoEL.style.width = infoElPosition.width;
    infoEL.style.height = infoElPosition.height;
    infoEL.style.top = infoElPosition.top;
    infoEL.style.left = infoElPosition.left;


    slideEl.appendChild(imgEl);
    slideEl.appendChild (infoEL);
    slidesEl.appendChild(slideEl);
})

var emblaNode = document.querySelector('.embla')
var options = { loop: 1, speed: 100 }

var embla = EmblaCarousel(emblaNode, options)

var prevBtn = document.querySelector(".embla__button--prev");
var nextBtn = document.querySelector(".embla__button--next");

function setupPrevNextBtns (prevBtn, nextBtn) {
    prevBtn.addEventListener('click', embla.scrollPrev, false);
    nextBtn.addEventListener('click', embla.scrollNext, false);
}

setupPrevNextBtns(prevBtn, nextBtn);


var locations = [
    "Netherlands",
    'Laval, Canada',
    '?', 
    '?',
    'Netherlands',
    'USA',
    '?',
    'York, Canada',
    'Marseille, France',
    'Coventry, UK',
    'Wyalusing, USA',
    'Warsaw, Poland',
    'Lincoln City, USA',
    '?',
    '?',
    '?',
    'Bahrain',
    'Belgium',
    'France',
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 