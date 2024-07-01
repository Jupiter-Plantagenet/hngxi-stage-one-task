function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    currentTimeElement.textContent = utcTime;
    currentDayElement.textContent = dayOfWeek;
}

// Update time and day immediately
updateTimeAndDay();

// Update time and day every minute
setInterval(updateTimeAndDay, 60000);
