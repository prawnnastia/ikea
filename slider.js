var imgArray = [];
for (var i = 0; i < 4; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/vago/vago-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Und wieder was geschafft. Die Gartenmöbel wurden endlich geliefert Blumenkübel verteilt und jetzt nur noch genießen. Morgen geht es weiter.',
    'Aan de rand van het bos en het veld staan twee zetels.', 
    '',
    '', 
];

var infoPosArray = [
    {
        width: '20vw',
        height: '12vw',
        top: '21vw', 
        left: '35vw', 
    }, 
    {
        width: '35vw',
        height: '20vw',
        top: '27vw', 
        left: '35vw', 
    },
    {
        width: '10vw',
        height: '10vw',
        top: '10vw', 
        left: '10vw', 
    },
    {
        width: '10vw',
        height: '10vw',
        top: '10vw', 
        left: '10vw', 
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