function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount < 0 || tipPercentage < 0) {
        alert("Please enter valid numbers!");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;

    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}