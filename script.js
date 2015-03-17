var originalDateElement =  document.getElementById('originalDate');
var originalDate;

function func() {
	originalDate = new Date();
	originalDateElement.innerHTML = formatDate(originalDate);
}

setInterval(func, 1000);

var applyButton =  document.getElementById('apply');

applyButton.addEventListener('click', function () {
	var formattedDateElement =  document.getElementById('formattedDate');

	var offset = originalDate.getTimezoneOffset() * 60000;

	var utcMilliseconds = originalDate.getTime() + offset;

	var timeZoneDate = new Date(utcMilliseconds + getTimezoneOffset());

	formattedDateElement.value = formatDate(timeZoneDate);		
})

function getTimezoneOffset () {
	var timeZoneElement =  document.getElementById('timeZone');
	var timeZone = timeZoneElement.value;

	return timeZone * 60 * 60000;
}

function formatDate (date) {
	var options = {
		year: "numeric", 
		month: "short",
		day: "numeric",
		hour: "2-digit", 
		minute: "2-digit",
		second: "2-digit"
	};

	return date.toLocaleDateString("en-US", options);
}