const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const particleSpot = [];
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 3; i++){
        particleSpot.push(new Particle());
    }
    console.log(particleSpot.length);
    
})

class Particle{
    constructor() {
        console.log(mouse.x);
        console.log(mouse.y);
        this.x = mouse.x
        this.y = mouse.y;
        this.size = Math.random() * 4 + 1.5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue * Math.random()*100 + 1},${Math.random()*80 + 1}%,40%)`;
        // this.color = `hsl(140,70%,80%)`;
        console.log(particleSpot);
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function handleParticle() {
    // console.log(particleSpot.length);
    for (let i = 0; i < particleSpot.length; i++){
        particleSpot[i].update();
        particleSpot[i].draw();
    }
}
function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animation);
}
animation();
