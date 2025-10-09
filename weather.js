const dateElement = document.getElementById("date");
const clockElement = document.getElementById("clock");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];


function showDate() {
  const now = new Date();
  const dayName = days[now.getDay()];
  const date = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  dateElement.textContent = `${dayName}, ${date} ${monthName} ${year}`;
}


function showClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  const modeToggle = document.getElementById("modeToggle");


modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    modeToggle.textContent = "☀️ Mode";
  } else {
    modeToggle.textContent = "🌙 Mode";
  }
});

}


setInterval(showClock, 1000);


showDate();
showClock();