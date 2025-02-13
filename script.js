function toggleFav() {
  this.classList.toggle("selected");
  if (this.classList.contains("selected")){
    this.src = "resources/star-minus-outline.svg";
  }
  else {
    this.src = "resources/star-plus-outline.svg";
  }
}

function toggleWatch() {
  this.classList.toggle("selected");
  if (this.classList.contains("selected")){
    this.src = "resources/eye-minus-outline.svg";
  }
  else {
    this.src = "resources/eye-plus-outline.svg";
  }
}


function toggleBranch() {
  this.classList.toggle("selected");
  if (this.classList.contains("selected")){
    this.src = "resources/source-branch-minus.svg";
  }
  else {
    this.src = "resources/source-branch-plus.svg";
  }
}


var stars = document.querySelectorAll("#fav");
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
