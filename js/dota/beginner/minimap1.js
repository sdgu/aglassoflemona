var canvas2 = document.getElementById("mmLabel1");
var context2 = canvas2.getContext("2d");
var imageObj3 = new Image();

var el = document.getElementById("reveal");
el.onclick = drawAll;

function drawAll()
{
    context2.beginPath();
    context2.arc(18, 188, 15, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "green";
    context2.stroke();

    drawStroked("Radiant Fountain", 34, 191);

    context2.beginPath();
    context2.arc(33, 175, 5, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "#00e600";
    context2.stroke();

    drawStroked("Radiant Ancient", 38, 179);

    context2.beginPath();
    context2.arc(192, 21, 15, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "red";
    context2.stroke();

    drawStroked("Dire Fountain", 214, 24);

    context2.beginPath();
    context2.arc(177, 40, 5, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "#ff3333";
    context2.stroke();

    drawStroked("Dire Ancient", 186, 46);


}


//http://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
function drawStroked(text, x, y)
{

    context2.font = "12px Arial";
    context2.strokeStyle = "black";
    //context2.lineWidth = 4;
    context2.strokeText(text, x, y);
    context2.fillStyle = "white";
    context2.fillText(text, x, y);
    context2.miterLimit = 2;


}

function drawStroked2(cont, text, fSize, outWidth, outColor, inColor, x, y)
{

    cont.font = fSize + "px Arial";
    cont.lineWidth = outWidth;
    cont.strokeStyle = outColor;
    //context2.lineWidth = 4;
    cont.strokeText(text, x, y);
    cont.fillStyle = inColor;
    cont.fillText(text, x, y);
    cont.miterLimit = 3;


}

imageObj3.onload = function()
{
    context2.drawImage(imageObj3, 0, 0, 209, 205);

    canvas2.onclick = function(e)
    {
        var rect = canvas2.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

//var data = context2.getImageData(x, y, 1, 1).data;
var xC = e.clientX - rect.left;
var yC = Math.floor(e.clientY - rect.top);

if ((xC > 9) && (xC < 25) && (yC > 179) && (yC < 195))
{
    context2.beginPath();
    context2.arc(18, 188, 15, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "green";
    context2.stroke();

    drawStroked("Radiant Fountain", 34, 191);


}

else if ((xC > 27) && (xC < 37) && (yC > 172) && (yC < 178))
{
    context2.beginPath();
    context2.arc(33, 175, 5, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "#00e600";
    context2.stroke();

    drawStroked("Radiant Ancient", 38, 179);
}

else if ((xC > 185) && (xC < 199) && (yC > 13) && (yC < 29))
{
	context2.beginPath();
	context2.arc(192, 21, 15, 0, 2 * Math.PI);

	context2.lineWidth = 3;
	context2.strokeStyle = "red";
	context2.stroke();

	drawStroked("Dire Fountain", 214, 24);
}

else if ((xC > 173) && (xC < 181) && (yC > 37) && (yC < 43))
{
	context2.beginPath();
    context2.arc(177, 40, 5, 0, 2 * Math.PI);

    context2.lineWidth = 3;
    context2.strokeStyle = "#ff3333";
    context2.stroke();

    drawStroked("Dire Ancient", 186, 46);
}



alert(xC + " " + yC);

}

//radiant fountain
//top left 9,179
//bottom left 9, 195
//top right 25, 179
//bottom right 25, 195

//radiant ancient
//tl 28, 176
//bl 28, 178
//tr 36, 172
//br 36, 178

//dire fountain
//tl 185, 13
//bl 185, 29
//tr 199, 13
//br 199, 29

//dire ancient
//tl 173, 37
//bl 173, 43
//tr 181, 37
//br 181, 43


};
imageObj3.src = "/images/dota/beginner/minimap_orig.png";