const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// how to make paint brush 
const mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    draw();
})

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    draw();
})

function draw() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
    ctx.fill();
}
