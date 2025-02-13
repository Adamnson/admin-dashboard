function toggleClassList(obj) {
  console.log("click registered");
  obj.classList.toggle("selected");
}

function toggleFav() {
  toggleClassList(this);
  if (this.classList.contains("selected")){
    this.src = "resources/star-minus-outline.svg";
  }
  else {
    this.src = "resources/star-plus-outline.svg";
  }
}

function toggleWatch() {
  toggleClassList(this);
  if (this.classList.contains("selected")){
    this.src = "resources/eye-minus-outline.svg";
  }
  else {
    this.src = "resources/eye-plus-outline.svg";
  }
}


function toggleBranch() {
  toggleClassList(this);
  if (this.classList.contains("selected")){
    this.src = "resources/source-branch-minus.svg";
  }
  else {
    this.src = "resources/source-branch-plus.svg";
  }
}


var stars = document.querySelectorAll("#fav");
console.log(stars);
stars.forEach(function(el) {
  el.addEventListener("click", toggleFav );
});

var eyes = document.querySelectorAll("#watch");
eyes.forEach(function(el) {
  el.addEventListener("click", toggleWatch );
});

var branches = document.querySelectorAll("#branch");
branches.forEach(function(el) {
  el.addEventListener("click", toggleBranch );
});
