 const year = document.getElementbyid("year");
 const down = document.getElementbyid("down");
 const days = document.getElementbyid("days");
const minutes = document.getElementbyid("minutes");
const seconds = document.getElementbyid("seconds");
 const loading = document.getElementById("loading");
const countdown = document.getElementById("countdown");


const NewYearCountdown = new Date().getFullYear();
const NewYEar = new Date(` january 01    ${NewYearCountdown  + 1} 00: 00: 00`);

// my h1 styling

const countdownElement = document.getElementById('small');


countdownElement.style.color = 'blue';
countdownElement.style.fontWeight = 'bold';
countdownElement.style.fontSize = '48px';





 year.innerHTML = NewYearCountdown + 1;



function updateCountdown(){   

    NewYearCountdown =  new Date();
    
    
    const diff = NewYearCountdown - NewYEar;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
   const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
   minutes.innerHTML = m < 10 ? '0' + m : m;
   seconds.innerHTML = s < 10 ? '0' + s : s;
}
 setTimeout(() => {
    loading.remove();
     countdown.style.display = 'flex';
 }, 1000);




// setInterval(updateCountdown, 1000);


