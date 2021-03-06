var imgArray = [];
for (var i = 0; i < 10; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/hemler/hemler-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Von Sonne auf totalen Nebel innerhalb von drei Minuten. Praktisch - brauch ich wenigstens keinen Moody up-Filter ๐',
    'Ten ciฤลผki ranek i to ciฤลผkie powietrze, ktรณre przecieลผ kochasz i ktรณrego nie chcesz.',
    '๐ ',
    '์ ์ง์ง ๋๋๋ค ๋์์ค๋ค๋ฉด์ ์์ฒญ ๊ดด๋กญํ๋๋ฐ 30๋ถ์ ํ ๊ฑฐ ํ์๊ฐ ๋ฐ ๊ฑธ๋ฆฐ๋ฏ ใ ใ  ๊ทธ๋๋ ๋ง๋ค์ด ๋์ผ๋ ๋์ด ์ ์ด๋์ ์๊ธฐ ์๋ฉํจ ์ ํ๊ณ  #์ฒซ์งธ๋ ์์ฆ #ํ๊ธ๊ณต๋ถ ํ๋๋ ์ ๋ฒ ๊ธ์จ๋ ์์ฐ๋ค ใใ ์ด์  ๊ณง #์ด๋ฉ์ด๋ค ๐ฑ',
    'Life after @ikeasrbija ๐',
    "Project 2.. #ikeaps2014 a corner for adeem's stuff..",
    "Domenica. Il mio avocado cresce a vista d'occhio.",
    'Umm. Yes. #winning @jukihomesewing #MO1000 #serger and my fancy @babylocksewing #Spirit stand-alone #embroiderymachine. ๐โค๐ I see a gazillion fun New projects in my very near future!',
    'แแขแแฉแแฎแซ แแขแจแแกแฏ แแกแแก แแฅํ์ แแฎแซแแตแซแแฆ แแฉแฏ แแขแแกแแก แแตแแฎแซ แแฉแแแณแซ แแฉแบ. แแกแแณแฏแแขแจแแต แแตแแฅแแแฆ แแฎแซแแฑแแต แแตแปแแณแฏ แแฎแฏ แแฎแแก แแกแฏแแกแปแแฅ.',
    'Built my own ikea flat pack ๐๐โ',
];

var infoPosArray = [
    {
        width: '40vw',
        height: '32vw',
        top: '17vw', 
        left: '25vw', 
    }, 
    {
        width: '20vw',
        height: '29vw',
        top: '21vw', 
        left: '17vw', 
    },
    {
        width: '20vw',
        height: '35vw',
        top: '4vw', 
        left: '27.5vw',
    },
    {
        width: '30vw',
        height: '45vw',
        top: '5vw', 
        left: '27.5vw', 
    },
    {
        width: '20vw',
        height: '22vw',
        top: '21vw', 
        left: '22vw',  
    },
    {
        width: '18vw',
        height: '27vw',
        top: '16vw', 
        left: '35vw', 
    },
    {
        width: '20vw',
        height: '33vw',
        top: '18vw', 
        left: '30vw', 
    },
    {
        width: '20vw',
        height: '28vw',
        top: '24vw', 
        left: '22vw', 
    },
    {
        width: '17vw',
        height: '27vw',
        top: '23vw', 
        left: '19vw', 
    },
    {
        width: '28vw',
        height: '35vw',
        top: '15vw', 
        left: '29vw', 
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
    'Austria',
    'Poland',
    '?',
    'Yongin, South Korea',
    'Sarajevo, Bosnia and Herzegovina',
    'Malaysia',
    'Italy',
    'USA',
    'South Korea',
    'Australia',
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 