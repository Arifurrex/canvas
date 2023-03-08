const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 150, 150);
    ctx.arc(120, 150, 50, 0, 2 * Math.PI);
    ctx.fill();
})
const mouse = {
    x: null,
    y: null
}
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCirle();
})
function drawCirle() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
    ctx.fill();
}
drawCirle();