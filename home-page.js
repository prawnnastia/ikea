var items = document.querySelectorAll ('.item')
items.forEach(function (item) {
    let otherItems = Array.from(items).filter(function (otherItem){
        return item !== otherItem; 
    })
    item.addEventListener ('mouseenter', function () {
        document.body.style.backgroundColor = 'yellow';
        otherItems.forEach(function(otherItem) {
            otherItem.style.opacity = 0;
        })
    })
    item.addEventListener ('mouseleave', function () {
        document.body.style.backgroundColor = 'white';
        otherItems.forEach(function(otherItem) {
            otherItem.style.opacity = 1;
        })
    })
})