function calc() {
  const billAmount = parseFloat(document.getElementById("Bill_Amount").value);
  const tipPercent = parseFloat(document.getElementById("Tip_percent").value);

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers.");
    return;
  }

  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;

  document.getElementById("Tot_tip").textContent = "Total Tip: ₹" + tipAmount.toFixed(2);
  document.getElementById("Tot_bill").textContent = "Total Bill (with Tip): ₹" + totalAmount.toFixed(2);
}
function reset() {
  document.getElementById("Bill_Amount").value = '';
  document.getElementById("Tip_percent").value = '';
  document.getElementById("Tot_tip").textContent = '';
  document.getElementById("Tot_bill").textContent = '';
}