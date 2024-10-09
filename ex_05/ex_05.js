function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `The current time is ${hours}:${minutes}:${seconds}.`;
    
    document.getElementById('timeDisplay').textContent = timeString;
}

setInterval(displayCurrentTime, 1000);