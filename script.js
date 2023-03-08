const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);
// now  set mutliple color
hue = 0;
// let save all circle here 
let Circles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// it will make context resize according to window width and height
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// all circle in one place so make a x and y cordination store in variable
const mouse = {
    x: undefined,
    y: undefined
}
// set a addeventListener in canvas .so when we click we will ge x and y cordination a set it in x and y variable
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 4; i++){
        Circles.push(new Particle())
    };

})
// lets make multiple cirle with class
// now make mutiple circle with class
class Particle{
    constructor() {
        // need to chang cordination form herer 
        this.x = mouse.x;
        this.y = mouse.y;
        // circle make biggger from here ,lets little smaller
        this.size = Math.random() * 10 + 1;
        this.color = `hsl(${hue},${Math.random() * 60 + 1}%, ${Math.random() * 70 + 1}%)`;
        // now try to move circle particle
        this.speedX = Math.random() * 4 - 1.5;
        this.speedY = Math.random() * 4 - 1.5;
        
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;    
    }

    draw() {
        ctx.strokeStyle = this.color;
        // for  remove line 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
}
// let handle it 
function handleParticle() {
    for (let i = 0; i < Circles.length; i++){
        Circles[i].update();
        Circles[i].draw();
    }
    
}
// now we will use animation loop 
function animation() {
    // now remove line 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // call handleparticle here 
    handleParticle();
    hue++;
    requestAnimationFrame(animation);
}

// need to call animation function 
animation();

// thank you for stay with me .hope you understnand .if any question please comment 