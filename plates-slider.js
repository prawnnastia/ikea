var imgArray = [];
for (var i = 0; i < 16; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/plates/plate-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Morning ð¥ð',
    '10 months and 23 days old âï¸Toasted Bread âï¸Boiled Egg âï¸Avocado',
    'Applewood smoked wild salmon ð',
    'Leftover photos from 2019 nr.4. Pan fried corn, carrots and broccoli with seeds',
    'ð¸First time making waffles ! ð¸First time testing my new bought waffle maker from Princess ! ð¸First time using my pink plate from Ikea ð¸First time bought peach blossoms from Albert Heijn ð¸ Spring here we come!!!!',
    'Lunch Time ð¯ heute gab es eine Burrito Bowl mit Limetten-Reis, Chorizo, Mais, Avocado-Salsa und Schmand - super lecker und zudem schnell zuzubereiten ð seitdem ich in New York zum ersten Mal bei Chipotle war, liiiiebe ich solche Bowls!',
    'Homemade couscous with the best falafels from @greenway_foods ð',
    'Sometimes, all I want is fresh bread and butter...',
    "It's snack time ð",
    'ë¹µ ë¨¹ê³  ëë ë°¥ì´ ë¡ê¸´ë¤. ë¤ë¨¹ê³  ëë¬´ ë§ì´ë¨¹ìë¤ê³  ííì¤',
    'Smoked salmon salade for lunch ð',
    'Homemade breakfast on my day off ðð¥ð«ðð¥âï¸ð¥',
    'ãç²ãæ§ä¼&çµå©å¼è¨å¿µæ¥ð·.å¨ã®çºè¡¨ä¼ãç¡äºã«çµãããå®¶ã§ãã¼ãºã±ã¼ã­ãä½ã£ã¦é£ã¹ã¾ããð. åæ¥æ± è¢è¥¿æ­¦ã§è³¼å¥ãããã¥ã¼ãªããã®ãèå­ããããã³ã°ð·. ãã®ãã¥ã¼ãªããããããªã«é«ããªãã®ã«ãããªã«å¯æãã¦ç¾å³ããã£ãâ£ï¸.', 
    'Lunch..',
    'â Sun â¡ Greeny-way â¡ Alpha Pepperi â¡ Whityverse â¡ Unknown â¬ â¼',
    'ð ð¦',
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