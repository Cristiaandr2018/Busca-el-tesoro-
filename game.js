const WIDTH = 400;
const HEIGH = 400;   

let target = {
x: getRadomNumber(WIDTH),
y: getRadomNumber(HEIGH)
};
let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click',function(e){
    console.log('click');;
    clicks++;
    let distance = getDistance(e, target);
    let DistanceHint = getDistanceHint(distance)
    $distance.innerHTML = `<h1>${DistanceHint}</h1>`

    if (distance < 20) {
        alert(`Has encontrado el tesoro en ${clicks} clicks`)
        location.reload();
        
    }
})

