let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

requestAnimationFrame(animate);
function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    let x = +document.getElementById("x-value").value;
    let y = +document.getElementById("y-value").value;
    let r = +document.getElementById("r-value").value;
    let numRings = +document.getElementById("number-rings").value;
    let gaga = numRings;
    let newR = r / numRings;

        ctx.lineWidth = 3;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        // ctx.arc(x, y, r, startAngle, endAngle);
        ctx.stroke();

        for (i = 0; i < numRings; i++) {
            ctx.lineWidth = 3;
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(x, y, r - i * newR, 0, 2 * Math.PI);
            // ctx.arc(x, y, r, startAngle, endAngle);
            ctx.stroke();
        }

    requestAnimationFrame(animate);
}
