function clockDisplay() {
    const date = new Date();
    const hours =  date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDisplay = document.querySelector("#hour");
    const minuteDisplay = document.querySelector("#minute");
    const secondDisplay = document.querySelector("#second")

    hourDisplay.textContent = hours;
    minuteDisplay.textContent = minutes;
    secondDisplay.textContent = seconds
}

setInterval(clockDisplay, 100);