var imgArray = [];
for (var i = 0; i < 16; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/plates/plate-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Morning 🥕🍞',
    '10 months and 23 days old ✔️Toasted Bread ✔️Boiled Egg ✔️Avocado',
    'Applewood smoked wild salmon 🐟',
    'Leftover photos from 2019 nr.4. Pan fried corn, carrots and broccoli with seeds',
    '🌸First time making waffles ! 🌸First time testing my new bought waffle maker from Princess ! 🌸First time using my pink plate from Ikea 🌸First time bought peach blossoms from Albert Heijn 🌸 Spring here we come!!!!',
    'Lunch Time 🌯 heute gab es eine Burrito Bowl mit Limetten-Reis, Chorizo, Mais, Avocado-Salsa und Schmand - super lecker und zudem schnell zuzubereiten 😋 seitdem ich in New York zum ersten Mal bei Chipotle war, liiiiebe ich solche Bowls!',
    'Homemade couscous with the best falafels from @greenway_foods 👌',
    'Sometimes, all I want is fresh bread and butter...',
    "It's snack time 😋",
    '빵 먹고 나니 밥이 땡긴다. 다먹고 너무 많이먹었다고 후회중',
    'Smoked salmon salade for lunch 😋',
    'Homemade breakfast on my day off 😋🥞🫐🍓🥑☕️🥛',
    'お疲れ様会&結婚式記念日🌷.娘の発表会が無事に終わり、家でチーズケーキを作って食べました💕. 先日池袋西武で購入したチューリップのお菓子をトッピング🌷. このチューリップ、そんなに高くないのにこんなに可愛くて美味しかった❣️.', 
    'Lunch..',
    '☀ Sun ➡ Greeny-way ➡ Alpha Pepperi ➡ Whityverse ➡ Unknown ⬛ ▼',
    '🍝 🦐',
];

var infoPosArray = [
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    }, 
    {
        width: '35vw',
        height: '36vw',
        top: '14vw', 
        left: '25vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw',
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw',  
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '37vw',
        height: '33vw',
        top: '17vw', 
        left: '31vw', 
    },
    {
        width: '43vw',
        height: '28vw',
        top: '22vw', 
        left: '28vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw',  
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '20vw',
        top: '18vw', 
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
    'Egypt',
    '?',
    'Denmark',
    'Budapest, Hungary',
    'Amsterdam, Netherlands',
    'Berlin, Germany',
    'Belgium',
    'London, England',
    '?',
    'South Korea',
    'Lier, Belgium',
    'Sydney, Australia',
    'Tokyo', 
    'Singapore',
    'Dubai, UAE',
    'Denmark',
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 