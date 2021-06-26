var imgArray = [];
for (var i = 0; i < 28; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/frakta/frakta-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Il geranio è la pianta delle nostre mamme e in Sicilia si trova in ogni balcone, in vasche e giare di terracotta. A questi gerani però, presi al supermercato in uno slancio green, è stato riservato un altro destino... sarà andata meglio a loro?', 
    'Orimattilassa käymässä ja auto lastattu täyteen polttopuuta. Lähtikö vähän lapasesta? 🙈 vielä olisi mahtunut lisääkin kyytiin, mutta kassit loppui kesken 😅',
    '...',
    'Mum says I am not for sale',
    '#mattopyykillä😂',
    'Немного о уличном стиле ;)',
    'Something new is coming soon. Stay tuned IKEA XÅLPS GÖRTZEUG',
    'Ikea bags really do hold almost anything. 😂',
    '#해질녘 #바람 은 너무나 좋고 온도도 #딱좋아 언니랑 만나서 아이들 #에너지 빼기 와 #수다수다 진짜 #잘놀았다 오늘은 파랑 #ikeafrakta 도#엘비스볼 #엘비스컵 도 #짝짝꿍',
    '...',
    'Foto pencitraan abis 2 babak cirambay gara-gara ditinggal anak yang diajak nginep lama keluar kota, appabi pulang2 langsung ngajak belanja biar ga cirambay babak 3 😅 cemanaaaa hamba ini nanti kalo ditinggal kuliaaahhh buibuuuu 😅. Feat #ikeafrakta yang uds menahan beban kehidupan sekian lama n kerudung yang uds nyengsol',
    '...',
    '...',
    'Pyykkitupalooks. Hästäks ihana arki ja silleen. Mun muutama vuosi sitten edesmennyt mummo asui aikanaan päälle 30 vuotta tässä samassa taloyhtiössä jossa mulla on nyt pätkä rivaria. Pesutuvan varauslistoista löytyi vielä tuttua käsialaa vuodelta 2016. Mummo on mankeloinut. Ehkä munkin pitäis.',
    '#Balenciaga can’t touch this level of crinkle #ikeafrakta',
    '夏用ベッドと勘違いしてる。',
    'It is about the journey!',
    '*Werbung* 😉 Falls ihr gerade auf der Suche nach einem neuen Körbchen für euer Hund seid, kann euch Milow das neueste Körbchen von Ikea empfehlen. 😅 Ein Hund mit 53cm Schulterhöhe passt problemlos rein. Das Körbchen hat sogar praktische Tragegriffe. Eine Traglast von 18 kg sind für dieses Körbchen nach ersten Tests kein Problem. Für mehr Gemütlichkeit empfiehlt Milow eine kuschelige Decke. 😊 Das einzige, was Milow gestört hat, waren Herrchen und Frauchen, die mal wieder Paparazzi spielen mussten. 😅',
    'How many Emmetts can you fit in one bag?',
    'Onni on sininen Ikea-kassi. Cityvarasto taas pakattu täyteen veneeltä tuotuja kamoja.',
    'Bangkok here I come! Thrift trip! 😬😉😆😛',
    'Taloyhtiön #kesäjuhlat. Tarjolla kylmiä juomia, grilliherkkuja sekä kahvia ja hyvin kohonneesta taikinasta leivottua pullaa. Tän voi lisätä #ikeakassi ideoihin: parit kylmäkallet pitävät veden yllättävän kylmänä. Myös vannat ovat monikäyttöisiä 👌 Lapset halusivat majan ja keksivät mennä pöydän alle syömään 😂',
    'Lala X Ikea X Balenciaga',
    'Pup poncho.',
    '이제 곧 겨울철이면 실내에다 빨래를 널어 습도를 높이던 이유로다가, 건조기 사용은 낮에만 하구 저녁빨래도 부담이없이 할 수 있게돼 좋아해야되나 아쉬워해야되나~ 건조시간이 대략 1:30~2시간 정도 소요되므로 아무리 층간소음 걱정 없다곤 하는 건조기지만 일단 나도 시끄럽고ㅋ 이래저래 9시이후로는 돌리지 않았기 때뭉에.. 나두 "세탁실 따로 있어서 꼭 필요했던 빨래 운반용 가방으로 #ikeafrakta #frakta 를 쓰던 울언니처럼", 한국보다 스웨덴에서 더 싼건 이거뿐여서(600원) 무려 스웨덴에서 사온 ㅋㅋ 프락타를 빨래 운반용으로 사용하기로 함. 거실이 코앞인데 왜그러냐는 큰아들의 태클이 있었음.',
    'Just loaded up my #lulavan and am literally driving two doors down for a #popupboutique. Come shop! •',
    'You know guys, I am not really a great bag person, so when the internet tells me It am actually in possession of the current It bag, well it just gotta be celebrated with a trout pout and a pose!',
    'Glamping ⛺️',
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
        height: '23vw',
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
        height: '35vw',
        top: '12vw', 
        left: '27.5vw', 
    },
    {
        width: '39vw',
        height: '19vw',
        top: '5vw', 
        left: '30vw', 
    },
    {
        width: '44vw',
        height: '35vw',
        top: '13vw', 
        left: '27.5vw', 
    },
    {
        width: '30vw',
        height: '44vw',
        top: '5vw', 
        left: '27vw', 
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
        width: '35vw',
        height: '25vw',
        top: '17vw', 
        left: '24vw', 
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
        width: '35vw',
        height: '44vw',
        top: '5vw', 
        left: '24vw', 
    },
    {
        width: '33vw',
        height: '30vw',
        top: '18vw', 
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
    'Japan',
    'Melbourne, Australia',
    'Rostock, Germany',
    '?',
    'Finland',
    'Bangkok, Thailand',
    'Vantaa, Finland',
    'Los Angeles, California',
    'Canada',
    'South Korea',
    '?',
    'Letchworth Garden City, England',
    'Netherlands',
];
var locationElement = document.querySelector ('h1')

function updateLocation() {
    var locationIndex = embla.selectedScrollSnap ();
    var location = locations [locationIndex];
    locationElement.innerHTML = location;
}

embla.on('select', updateLocation);
updateLocation(); 