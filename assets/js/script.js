const newYears = "01 Jan 2025";

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60) % 24));
    const minutes = Math.floor((totalSeconds / (60) % 60));
    const seconds = Math.floor(totalSeconds % 60);

    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;

    console.log(totalSeconds, days, hours, minutes, seconds,);
}

// initial call
countdown();

setInterval(countdown, 1000);