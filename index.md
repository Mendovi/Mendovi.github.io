<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function car_down () {x = 0;
x = document.getElementById("moto").offsetTop;
xn = x + 50;
document.getElementById("moto").style.top = xn+"px"
}
function car_up () {
x = 0;
x = document.getElementById("moto").offsetTop;
xn = x - 50;
document.getElementById("moto").style.top = xn+"px"
}
function car_left () {
x = 0;
x = document.getElementById("moto").offsetLeft;
xn = x - 50;
document.getElementById("moto").style.left = xn+"px"
}
function car_right () {
x = 0;
x = document.getElementById("moto").offsetLeft;
xn = x + 50;
document.getElementById("moto").style.left = xn+"px"
}
</script>
</head>
  
  
<body>
<img src="https://catwar.su/cw3/composited/527c56c2b4bf9ad2.png" id="moto" style="position:absolute; top:100px; left:0px">
<input type="button" value="↓" onclick="car_down()">
<input type="button" value="↑" onclick="car_up()">
<input type="button" value="←" onclick="car_left()">
<input type="button" value="→" onclick="car_right()"> 
</body>
</html>
