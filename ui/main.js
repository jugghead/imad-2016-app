console.log('Loaded!');

//madi animation

var img = document.getElementById('madi');

marginleft=0;

function moveright() {
    marginleft=marginleft+10;
    img.style.marginLeft= marginleft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveright, 100);
};