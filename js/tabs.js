const D = [["01 / The slow start", "Your first meeting?<br>The horizon.", "Fresh coffee. Breakfast just how you like it. A quiet anchorage and no reason to rush. Let the morning come to you.", "08:30", "morning.jpg"], ["02 / The long lunch", "Lunch that lasts<br>all afternoon.", "Swim, paddle, or do nothing. Lunch is served whenever the conversation slows down.", "13:00", "afternoon.jpg"], ["03 / The golden hour", "Dinner with<br>a sunset view.", "Golden light, a made-for-you menu, and a table set under the open sky.", "19:30", "evening.jpg"]];
const $ = id => document.getElementById(id);
const tabs = document.querySelectorAll(".tabs button");
tabs.forEach(b => b.onclick = () => {
  tabs.forEach(x => x.classList.remove("on")); b.classList.add("on");
  const d = D[b.dataset.i];
  $("d-kick").textContent = d[0]; $("d-title").innerHTML = d[1]; $("d-body").textContent = d[2]; $("d-time").textContent = d[3];
  const i = $("d-img"); i.style.display = ""; i.src = i.src.replace(/[^\/]+$/, d[4]);
});
