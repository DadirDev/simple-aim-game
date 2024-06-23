let Gameobject = document.getElementById("obj");
let counter = document.getElementById("counter");
let score;

//Get score from lockalstorage
if (localStorage.getItem("score") === null) {
  localStorage.setItem("score", 0);
}
score = localStorage.getItem("score");
counter.innerHTML = score;

//Random position
Gameobject.style.top = Math.random() * 90 + "%";
Gameobject.style.left = Math.random() * 90 + "%";

function Random() {
  score++;
  localStorage.setItem("score", score);

  //Random position
  Gameobject.style.top = Math.random() * 90 + "%";
  Gameobject.style.left = Math.random() * 90 + "%";

  counter.innerHTML = score;
}

function Clear() {
  score = 0;
  localStorage.setItem("score", score);
  counter.innerHTML = score;
}

function Customization() {
  Gameobject.style.borderRadius = document.getElementById("radius").value + "%";
  Gameobject.style.backgroundColor = document.getElementById("color").value;
  document.getElementById("container").style.backgroundColor =
    document.getElementById("bgcolor").value;
  document.body.style.backgroundColor =
    document.getElementById("bodycolor").value;
}
setInterval(Customization, 10);
Gameobject.addEventListener("click", Random);
