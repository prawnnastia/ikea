var imgArray = [];
for (var i = 0; i < 16; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/frosta/frosta-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Début de journée calme et coin café squatté par les filles ', 
    'The humble ikea frosta stool. The first piece of furniture to grace the new house. I like plywood clearly so these were always going to be on my list for the house. Can not wait for them to be a permanent fixture in the house to be honest and we are so close to that being a reality. .',
    'Bueno, no todas las sillas se han convertido en jardines improvisados, este taburete, además de soporte para el flexo (en esta casa somos dos sibaritas de la iluminación cálida y sutil, y las lámparas de techo tienen una luz intensa y fría infame) también se ha convertido en Portal de Belén con las figuritas de arcilla negra que trajimos de Paraguay y alguno de los imprescindibles animalitos que pongo cada año adorando al Suso.',
    'Zaini e borse sono stati lì ad aspettarci. Intanto noi sentivamo la mancanza di quel peso e non vedevamo l’ora di riempire nuovamente i nostri compagni di uscite con chiavi, cuffiette e agende. Il mio è nuovamente pronto... e voi, avete ripreso in spalla il vostro? 😊',
    'Il meteo, la luce, i colori... tutto suggerisce un mood autunnale e io, dal mio rifugio, inizio a farmelo piacere.',
    'Raised dog bowl holder hack #ikeahacks #frostastool with the legs cut short!',
    '#AlvarAalto inspiration.#stool60',
    'An ode to Friday evening. I love when we have a public holiday on Monday but I hate it in work as it ends up being 5 days of work fitted into 4 but it is done now. ',
    '...',
    '気分転換にサイクリングでも行こっと🚴‍♀️',
    'My morning office. Do you have a work from home sweet spot?',
    'スタッキング姿にほれぼれ。たくさん譲り受けたので、全部積み上げてみた🙄',
    '🪑gårsdagens storskraldsfund, efter hårdtomvredet klud, pladevat og en rest møbelvelour. den er dejlig blød og glæder sig til, at byde gæster på besøg igen 🎀',
    '引越しです。これから少しずつ完成した新居の様子を アップしていきたいと思います♩ よろしくお願いします🌼',
    'The winter nights fly by in my house!! Thus is what you have to do when you buy yarn from the local charity shop and when you get it home you realise it smells musty 😖 but not to worry it’s all clean now and ready for my next #tattydevine #crochet project. Can anyone guess what I’m doing?',
    'パトロール。',
];

var infoPosArray = [
    {
        width: '23vw',
        height: '28vw',
        top: '22vw', 
        left: '30vw', 
    }, 
    {
        width: '35vw',
        height: '43vw',
        top: '6vw', 
        left: '30vw', 
    },
    {
        width: '30vw',
        height: '27vw',
        top: '23vw', 
        left: '20vw', 
    },
    {
        width: '32vw',
        height: '26vw',
        top: '23vw', 
        left: '33vw', 
    },
    {
        width: '26vw',
        height: '27vw',
        top: '23vw', 
        left: '20vw', 
    },
    {
        width: '31vw',
        height: '26vw',
        top: '23vw', 
        left: '27vw', 
    },
    {
        width: '22vw',
        height: '24vw',
        top: '25vw', 
        left: '38vw', 
    },
    {
        width: '15vw',
        height: '20vw',
        top: '31vw', 
        left: '25vw', 
    },
    {
        width: '25vw',
        height: '18vw',
        top: '32vw', 
        left: '34vw', 
    },
    {
        width: '27vw',
        height: '25vw',
        top: '25vw', 
        left: '19vw', 
    },
    {
        width: '25vw',
        height: '30vw',
        top: '20vw', 
        left: '37vw', 
    },
    {
        width: '20vw',
        height: '17vw',
        top: '33vw', 
        left: '23vw', 
    },
    {
        width: '32vw',
        height: '23vw',
        top: '27vw', 
        left: '28vw', 
    },
    {
        width: '17vw',
        height: '20vw',
        top: '29vw', 
        left: '14vw', 
    },
    {
        width: '35vw',
        height: '42vw',
        top: '5vw', 
        left: '23vw', 
    },
    {
        width: '14vw',
        height: '19vw',
        top: '32vw', 
        left: '25vw', 
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
    "Marseille, France",
    'Ireland',
    'Portugal', 
    'Roma, Italy',
    'Roma, Italy',
    'Australia',
    '?',
    'Ireland',
    '?',
    'Nagoya, Japan',
    'Amsterdam',
    'Tokyo, Japan',
    'Copenhagen',
    'Japan',
    'UK',
    '?',
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 