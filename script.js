var display =  document.getElementById('originalDate');

function func() {
  display.innerHTML = new Date().toTimeString();
}

setInterval(func, 1000);