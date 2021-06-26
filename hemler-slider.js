var imgArray = [];
for (var i = 0; i < 10; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/hemler/hemler-' + imgNumber + '.png'
    imgArray.push(imgPath)
}

var infoArray = [
    'Von Sonne auf totalen Nebel innerhalb von drei Minuten. Praktisch - brauch ich wenigstens keinen Moody up-Filter 😜',
    'Ten ciężki ranek i to ciężkie powietrze, które przecież kochasz i którego nie chcesz.',
    '🌎 ',
    '와 진짜 두놈들 도와준다면서 엄청 괴롭히는데 30분에 할거 한시간 반 걸린듯 ㅠㅠ 그래도 만들어 놓으니 둘이 신이나서 자기 수납함 정하고 #첫째놈 요즘 #한글공부 하더니 제법 글씨도 잘쓰네 ㅎㅎ 이제 곧 #초딩이다 😱',
    'Life after @ikeasrbija 😂',
    "Project 2.. #ikeaps2014 a corner for adeem's stuff..",
    "Domenica. Il mio avocado cresce a vista d'occhio.",
    'Umm. Yes. #winning @jukihomesewing #MO1000 #serger and my fancy @babylocksewing #Spirit stand-alone #embroiderymachine. 😍❤👍 I see a gazillion fun New projects in my very near future!',
    '새로운 색깔 하나 더했을 뿐인데 볼 때마다 기분 좋은 곳. 하늘색이 이렇게 분위기 있을 줄 누가 알았어.',
    'Built my own ikea flat pack 👐😀✔',
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