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


/*let socket = new WebSocket("wss://mendovi.github.io/");

socket.onopen = function(e) {
  alert("[open] Соединение установлено");
  alert("Отправляем данные на сервер");
  socket.send(x);
};

function ifImageMove () {
	if(dx != 0)
		var jsonData
		jsonData = JSON.stringify(imageMove);
		console.log(jsonData);

}

/*var imageMove = {
	dc = xn;
}
function ifImageMove () {
	if(dx != 0)
		var jsonData
		jsonData = JSON.stringify(imageMove);
		console.log(jsonData);

}*/


async function subscribe() {
  let response = await fetch("/subscribe");

  if (response.status == 502) {
    // Статус 502 - это таймаут соединения;
    // возможен, когда соединение ожидало слишком долго
    // и сервер (или промежуточный прокси) закрыл его
    // давайте восстановим связь
    await subscribe();
  } else if (response.status != 200) {
    // Какая-то ошибка, покажем её
    showMessage(response.statusText);
    // Подключимся снова через секунду.
    await new Promise(resolve => setTimeout(resolve, 1000));
    await subscribe();
  } else {
    // Получим и покажем сообщение
    let message = await response.text();
    showMessage(message);
    // И снова вызовем subscribe() для получения следующего сообщения
    await subscribe();
  }
}

subscribe();
