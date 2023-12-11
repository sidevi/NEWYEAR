const year = document.getElementbyid("year");
const time = document.getElementbyid("time");
const day = document.getElementbyid("day");
const mintues = document.getElementbyid("mintues");
const secounds = document.getElementbyid("secounds");
const loading = document.getElementById("loading");

const NewYearCountdown = new Date().getFullYear();
const newdate = new Date(` january 01     ${ NewYearCountdown  + 1}00: 00: 00`);



year.innerHTML = NewYearCountdown + 1;



function updateCountdown(){   

    NewYearCountdown =new Date();
    const diff = NewYearCountdown - newdate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    
    day.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    mintues.innerHTML = m < 10 ? '0' + m : m;
    secounds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);




setInterval(updateCountdown, 1000);


