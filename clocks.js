const clocksMsk = document.querySelector('.clocks-msk');
const clocksUsa = document.querySelector('.clocks-usa');
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const getClocksMsk = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}<span style="font-size: 12px;">${seconds < 10 ? '0' + seconds : seconds}</.span> MSK`
    // const getClocksUsa = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}<span style="font-size: 12px;">${seconds < 10 ? '0' + seconds : seconds}</.span> NYC`

    clocksMsk.innerHTML = getClocksMsk;
    // clocksUsa.innerHTML = getClocksUsa;
}, 100);

const timezone = 'America/New_York';

//USA Clocks