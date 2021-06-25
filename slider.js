var imgArray = [];
for (var i = 0; i < 16; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/vago/vago-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Und wieder was geschafft. Die Gartenmöbel wurden endlich geliefert Blumenkübel verteilt und jetzt nur noch genießen. Morgen geht es weiter.',
    'Aan de rand van het bos en het veld staan twee zetels.', 
    'The kid’s a natural!',
    '...', 
    'Found this armchair in the forrest 😶', 
    '♥️💚💙🍀', 
    '☀️☁️🌾', 
    'No. 0034', 
    '170518. Årets första gräsklippning & de gula stolarna på plats under äppleträden! Nu är det sommar!! 💛💗💚', 
    '...', 
    'Nytt lock till sandlådan👍🏻', 
    '#juna #ikea an? #nurmikko voi hyvin.', 
    'Color splash outside my office today.', 
    'De toezichthouders op onze nieuwe moestuin zitten lekker in het zonnetje.', 
    '...', 
    'Idag för två år sedan fotades vårt gamla hus inför försäljning. Så många gånger jag har suttit på balkongen vi hade där 👆🏻 Kanske plockar vi fram utemöblerna här idag, soligt och varmt ute ☀️',
];

var infoPosArray = [
    {
        width: '24vw',
        height: '16vw',
        top: '20vw', 
        left: '34vw', 
    }, 
    {
        width: '35vw',
        height: '20vw',
        top: '28vw', 
        left: '33vw', 
    },
    {
        width: '30vw',
        height: '22vw',
        top: '27vw', 
        left: '25vw', 
    },
    {
        width: '28vw',
        height: '24vw',
        top: '8vw', 
        left: '26vw', 
    },
    {
        width: '34vw',
        height: '28vw',
        top: '21vw', 
        left: '32vw', 
    },
    {
        width: '30vw',
        height: '18vw',
        top: '8vw', 
        left: '22vw', 
    },
    {
        width: '45vw',
        height: '26vw',
        top: '26vw', 
        left: '27.5vw', 
    },
    {
        width: '40vw',
        height: '10vw',
        top: '43vw', 
        left: '30vw', 
    },
    {
        width: '30vw',
        height: '15vw',
        top: '19vw', 
        left: '29vw', 
    },
    {
        width: '28vw',
        height: '42vw',
        top: '10vw', 
        left: '18vw', 
    },
// _____________
    {
        width: '25vw',
        height: '26vw',
        top: '26vw', 
        left: '37vw', 
    },
    {
        width: '43vw',
        height: '47vw',
        top: '5vw', 
        left: '29vw', 
    },
    {
        width: '35vw',
        height: '15vw',
        top: '27.5vw', 
        left: '33vw', 
    },
    {
        width: '21vw',
        height: '23vw',
        top: '30vw', 
        left: '41vw', 
    },
    {
        width: '43vw',
        height: '38vw',
        top: '12vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '38vw',
        top: '13vw', 
        left: '28vw', 
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
    "Italy",
    'Antwerpen, Belgium',
    'Ramsö, Sweden', 
    'South Korea',
    '?',
    'Brasil',
    'Uppsala, Sweden',
    'Gotland, Sweden',
    'Sweden',
    'Älmhult, Sweden',
    '?',
    'Finnland',
    'Sweden',
    'Utrecht, Netherlands',
    'Netherlands',
    'Värnamo, Sweden'
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 