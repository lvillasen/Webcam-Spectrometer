document.getElementById("introBlock").style.display = "none";
document.getElementById("designBlock").style.display = "none";
document.getElementById("boxBlock").style.display = "none";
document.getElementById("testBlock").style.display = "none";

function introBlock() {
  var elementOut = document.getElementById("introBlock");
  if (elementOut.style.display === "none") {
    elementOut.style.display = "block";
  } else {
    elementOut.style.display = "none";
  }
}

function designBlock() {
  var elementOut = document.getElementById("designBlock");
  if (elementOut.style.display === "none") {
    elementOut.style.display = "block";
  } else {
    elementOut.style.display = "none";
  }
}

function boxBlock() {
  var elementOut = document.getElementById("boxBlock");
  if (elementOut.style.display === "none") {
    elementOut.style.display = "block";
  } else {
    elementOut.style.display = "none";
  }
}
function testBlock() {
  var elementOut = document.getElementById("testBlock");
  if (elementOut.style.display === "none") {
    elementOut.style.display = "block";
  } else {
    elementOut.style.display = "none";
  }
}
