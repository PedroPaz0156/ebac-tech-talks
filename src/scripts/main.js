AOS.init();

const dateEvent = new Date("Dec 12, 2025 19:00:00");
const eventTimeStamp = dateEvent.getTime();

const countDown = setInterval(function() { 
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const dayToMs = 1000 * 60 * 60 * 24;
    const hourToMs = 1000 * 60 * 60;
    const minToMs = 1000 * 60;

    const timeGap = eventTimeStamp - nowTimeStamp;

    const daysTillEvent = Math.floor(timeGap / dayToMs); //to adapt into days
    const hoursTillEvent = Math.floor((timeGap % dayToMs) / hourToMs);
    const minutesTillEvent = Math.floor((timeGap % hourToMs) / minToMs);
    const secondsTillEvent = Math.floor((timeGap % minToMs) / 1000);

    document.getElementById('contador').innerHTML = `${daysTillEvent}d ${hoursTillEvent}h ${minutesTillEvent}m ${secondsTillEvent}s`

    if(timeGap < 0) { 
        clearInterval(countDown)
        document.getElementById('contador').innerHTML = "Evento expirado"
    }
}, 1000);