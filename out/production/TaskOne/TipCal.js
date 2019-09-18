function TipCalculator() {
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;  
}

if(bill === "" || service === ""){
  alert("Enter valid values")
  releaseEvents()
}

var total = (bill*service)/people;
document.getElementById("total").style.display="block";
document.getElementById("tip").innerHTML = total
