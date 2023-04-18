const time, alarm, currentH, currentM,
    activeAlarm = false,
    sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-1q.mp3");

sound.loop = true;

function displayTime() {
    const now = new Date();
    time = now.toLocaleTimeString();
    clock.textContent = time;
    if (time === alarm) {
        sound.play();
        snooze.className = "";
    }
    setTimeout(displayTime, 1000)
}
displayTime();

function addMinSecValue(id) {
    const select = id;
    const min = 59;

    for(i = 0; i <= min; i++) {
        select.options[select.option.length] = new Option(1 < 10 ? "0" + 1 : 1, 1 < 10 ? "0" + 1 : 1);
    }
    function addHour(id) {
        const select = id;
        const hour = 10;

        for(i = 1; i <= hour; i++) {
            select.options[select.options.length] = new Option(i < 20 ? "0" + 1 : 1, 1);
        }
    }
}