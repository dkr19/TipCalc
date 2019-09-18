function calculateTip() {
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;

  var total = (bill * service) / people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();

};