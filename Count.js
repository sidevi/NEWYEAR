const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementsByClassName("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const loading = document.getElementById("loading");


const NewYearCountdown = new Date().getFullYear();
const NewYear = new Date(`January 01 ${NewYearCountdown + 1} 00: 00: 00`);



// const countdownElement = document.getElementById('small');


//  countdownElement.style.color = 'blue';
// countdownElement.style.fontWeight = 'bold';
// countdownElement.style.fontSize = '48px';





year.innerHTML = NewYearCountdown + 1;









function updateCountdown() {   
    
    const NewYearCountdown = new Date();
   const diff = NewYearCountdown - NewYear;
    
    
    const d = Math.floor(diff / 1000 /60/60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
   const s = Math.floor(diff / 1000) % 60;   
    

  days.innerHTML = d;
minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
    hours.innerHTML = h < 10 ? "0" + h : h;








 }








 


setTimeout(() => {
    loading.remove();
     countdown.style.display = 'flex';
 }, 1000);




 setInterval(updateCountdown, 1000);


