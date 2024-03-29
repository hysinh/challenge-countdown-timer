const newYears = "01 Jan 2025";

function millisecondsToHours(milliseconds) {

    const hours = Math.floor(milliseconds / (1000*60*60));
    return hours;
}

function millisecondsToDays(milliseconds) {

    const days = Math.floor(milliseconds / (1000*60*60*24));
    return days;
}

function millisecondsToMinutes(milliseconds) {

    const minutes = Math.floor(milliseconds / (1000*60));
    return minutes;
}

function millisecondsToSeconds(milliseconds) {

    const seconds = Math.floor(milliseconds / 1000);
    return seconds;
}

function hoursToMilliseconds(hours) {

    const milliseconds = Math.floor(hours * (1000*60*60));
    return milliseconds;

}

function daysToMilliseconds(days) {

    const milliseconds = Math.floor(days * (1000*60*60*24));
    return milliseconds;

}

function minutesToMilliseconds(minutes) {

    const milliseconds = Math.floor(minutes * (1000*60));
    return milliseconds;

}

function calculateRemainingTime() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    let totalTime = newYearsDate.getTime() - currentDate.getTime();
    return totalTime;
}


function countdown () {

    let remainingMilliseconds = calculateRemainingTime();
    let totalDays = millisecondsToDays(remainingMilliseconds);

    remainingMilliseconds = remainingMilliseconds - daysToMilliseconds(totalDays);
    let totalHours = millisecondsToHours(remainingMilliseconds);

    remainingMilliseconds = remainingMilliseconds - hoursToMilliseconds(totalHours);
    let totalMinutes = millisecondsToMinutes(remainingMilliseconds);

    remainingMilliseconds -= minutesToMilliseconds(totalMinutes);
    let totalSeconds = millisecondsToSeconds(remainingMilliseconds);

    document.querySelector('#seconds').innerHTML = totalSeconds;
    document.querySelector('#minutes').innerHTML = totalMinutes;
    document.querySelector('#hours').innerHTML = totalHours;
    document.getElementById('days').innerHTML = totalDays;

    console.log(`Total Minutes until New Year: ${totalMinutes}`);
    console.log(`Total Hours until New Year: ${totalHours}`);
    console.log(`Total Days until New Year: ${totalDays}`);
    console.log(`Total time in milliseconds: ${remainingMilliseconds}`);

}

// initial call
countdown();

/* setInterval(countdown, 1000);*/