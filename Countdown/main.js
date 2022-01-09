const newYear = "1 Jan 2023";

// CountDown Funciton
function CountDown() {
    const nextYear = new Date(newYear);
    const currentDate = new Date();
    const countDate = (nextYear - currentDate) / 1000;

    // Days
    const days = Math.floor(countDate / 3600 / 24);
    // Hours
    const hours = Math.floor(countDate / 3600) % 24;
    // Minutes
    const minutes = Math.floor(countDate / 60) % 60;
    // Seconds
    const seconds = Math.floor(countDate) % 60;
    // Milliseconds
    const milliseconds = Math.floor(currentDate.getMilliseconds()/10);

    //console.log(days, hours, minutes, seconds, milliseconds);
    // Send Output
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('milliseconds').innerHTML = milliseconds;
}

// Format Time
function formatTime(time) {
    if(time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

// Initial Function
CountDown();

// Animate Function
setInterval(CountDown, 10);