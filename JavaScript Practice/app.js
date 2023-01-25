let item = document.getElementsByTagName('tr');
console.log(item);

for(let i=0; i<item.length; i++)
{
    item[i].style.backgroundColor = 'gray';
}

let header = document.querySelector('.header');
header.style.borderBottom = '4px solid black';

let itembox = document.querySelector('.list');
console.log(itembox.parentNode);
itembox.parentNode.style.backgroundColor = 'lightgrey';

// let itemlist = document.querySelectorAll('.items');
// itemlist[2].style.backgroundColor = 'green';

let button = document.getElementById('btn').addEventListener('click', function(){
    alert('Button Clicked');
});

button = document.getElementById('btn');
button.addEventListener('Clicked', runEvent);

function runEvent(e){
    console.log('Event Type: '+e.type);
    hoverbox.style.borderColor = 'lightgreen';
}

function showEvent(e){
    console.log('Event Type: '+e.type);
    hoverbox.style.borderColor = 'blue';
}

let hoverbox = document.getElementById('hoverbox');
hoverbox.addEventListener('mouseenter', showEvent);
hoverbox.addEventListener('mouseleave', runEvent);

let axisX = document.getElementById('hb').addEventListener('mousemove', function(e){
    x.innerHTML = e.offsetX;
    y.innerHTML = e.offsetY;
})