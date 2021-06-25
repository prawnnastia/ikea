var imgArray = [];
for (var i = 0; i < 26; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/frakta/frakta-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Il geranio è la pianta delle nostre mamme e in Sicilia si trova in ogni balcone, in vasche e giare di terracotta. A questi gerani però, presi al supermercato in uno slancio green, è stato riservato un altro destino... sarà andata meglio a loro?', 
    'Orimattilassa käymässä ja auto lastattu täyteen polttopuuta. Lähtikö vähän lapasesta? 🙈 vielä olisi mahtunut lisääkin kyytiin, mutta kassit loppui kesken 😅',
    '...',
    '...',
    '#mattopyykillä😂',
    'Немного о уличном стиле ;)',
    'Something new is coming soon. Stay tuned IKEA XÅLPS GÖRTZEUG',
    '...',
    '...',
    '',
    '',
    '',
    '',
    'Pyykkitupalooks. Hästäks ihana arki ja silleen. Mun muutama vuosi sitten edesmennyt mummo asui aikanaan päälle 30 vuotta tässä samassa taloyhtiössä jossa mulla on nyt pätkä rivaria. Pesutuvan varauslistoista löytyi vielä tuttua käsialaa vuodelta 2016. Mummo on mankeloinut. Ehkä munkin pitäis.',
    '#Balenciaga can’t touch this level of crinkle #ikeafrakta',
    'Kulta, nyt meillä on lehtikaalia koko talveksi!',
    '',
    '',
    '',
    '',
    'Bangkok here I come! Thrift trip! 😬😉😆😛',
    'Taloyhtiön #kesäjuhlat. Tarjolla kylmiä juomia, grilliherkkuja sekä kahvia ja hyvin kohonneesta taikinasta leivottua pullaa. Tän voi lisätä #ikeakassi ideoihin: parit kylmäkallet pitävät veden yllättävän kylmänä. Myös vannat ovat monikäyttöisiä 👌 Lapset halusivat majan ja keksivät mennä pöydän alle syömään 😂',
    'Mökö💙',
    'Pup poncho.',
    '',
    '',
];

var infoPosArray = [
    {
        width: '45vw',
        height: '18vw',
        top: '25vw', 
        left: '27vw', 
    }, 
    {
        width: '44vw',
        height: '40vw',
        top: '12vw', 
        left: '27vw', 
    },
    {
        width: '13vw',
        height: '20vw',
        top: '18vw', 
        left: '18vw', 
    },
    {
        width: '46vw',
        height: '46vw',
        top: '4vw', 
        left: '27vw', 
    },
    {
        width: '46vw',
        height: '25vw',
        top: '20vw', 
        left: '27vw', 
    },
    {
        width: '18vw',
        height: '20vw',
        top: '11vw', 
        left: '26vw', 
    },
    {
        width: '45vw',
        height: '22vw',
        top: '26vw', 
        left: '27.5vw', 
    },
    {
        width: '36vw',
        height: '20vw',
        top: '32vw', 
        left: '26vw', 
    },
    {
        width: '27vw',
        height: '27vw',
        top: '25vw', 
        left: '37vw', 
    },
    {
        width: '35vw',
        height: '48vw',
        top: '3vw', 
        left: '32vw', 
    },
    {
        width: '28vw',
        height: '27vw',
        top: '26vw', 
        left: '20vw', 
    },
    {
        width: '44vw',
        height: '39vw',
        top: '7vw', 
        left: '27.5vw', 
    },
    {
        width: '20vw',
        height: '23vw',
        top: '15vw', 
        left: '19vw', 
    },
    {
        width: '20vw',
        height: '29vw',
        top: '20vw', 
        left: '29vw', 
    },
    {
        width: '26vw',
        height: '38vw',
        top: '7vw', 
        left: '18vw', 
    },
    {
        width: '44vw',
        height: '43vw',
        top: '6vw', 
        left: '27.5vw', 
    },
    {
        width: '18vw',
        height: '19vw',
        top: '17vw', 
        left: '25vw', 
    },
    {
        width: '44vw',
        height: '35vw',
        top: '13vw', 
        left: '27.5vw', 
    },
    {
        width: '20vw',
        height: '32vw',
        top: '18vw', 
        left: '40vw', 
    },
    {
        width: '44vw',
        height: '44vw',
        top: '5vw', 
        left: '27.5vw', 
    },
    // ---
    {
        width: '20vw',
        height: '16vw',
        top: '26vw', 
        left: '24vw', 
    },
    {
        width: '44vw',
        height: '25vw',
        top: '24vw', 
        left: '27.5vw', 
    },
    {
        width: '37vw',
        height: '36vw',
        top: '9vw', 
        left: '26vw', 
    },
    {
        width: '44vw',
        height: '26vw',
        top: '10vw', 
        left: '27.5vw', 
    },
    {
        width: '44vw',
        height: '44vw',
        top: '5vw', 
        left: '27.5vw', 
    },
    {
        width: '27vw',
        height: '44vw',
        top: '5vw', 
        left: '35vw', 
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
    "Rome, Italy",
    '?',
    'Helsinki, Finland', 
    '?',
    'Finland',
    'Moscow, Russia',
    'Switzerland',
    '?',
    'South Korea',
    'Finland',
    '?',
    'Pyhäjärvi, Finland',
    'Finland',
    'Turenki, Finland',
    'New York, USA',
    '?',
    'Jakarta, Indonesia',
    'Rostock, Germany',
    'Hong Kong, China',
    '?',
    'Bangkok, Thailand',
    'Vantaa, Finland',
    'Kotka, Finland',
    'Canada',
    '?',
    'Greeley, USA'
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 