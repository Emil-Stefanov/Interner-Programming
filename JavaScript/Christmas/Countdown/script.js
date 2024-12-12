const days = document.getElementById('days'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      seconds = document.getElementById('seconds');
      
let targetDate = new Date("2025-04-15T00:00:00"); // Default target date is Christmas 2024

setInterval(() => {
    findDate();
}, 1000);

function findDate() {
    let currentTime = new Date();
    
    // Calculate the difference between the current date and the target date
    let dateDiff = targetDate - currentTime;
    
    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;
    
    if (dateDiff > 0) { // Countdown until the target date
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff % (1000 * 60)) / 1000);
    } else {
        // Target date has passed
        DAYS = HOURS = MINUTES = SECONDS = 0;
    }
    
    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate(d, h, m, s) {
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue) {
    if (timeValue < 10) {
        timeValue = "0" + timeValue;
    }
    return timeValue;
}

// Example of how you can change the target date via user input
function changeTargetDate(inputDate) {
    targetDate = new Date(inputDate);
    if (isNaN(targetDate)) {
        alert("Invalid date format. Please use YYYY-MM-DD.");
    }
}
