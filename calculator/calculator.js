window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById("loan-amount").value = "10000";
	document.getElementById("loan-years").value = "10";
	document.getElementById("loan-rate").value = "4.5";
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentValues = getCurrentUIValues();
	const monthlyPayment = calculateMonthlyPayment(currentValues);
	updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const monthlyRate = values.rate / 100 / 12;
	const numberOfPayments = values.years * 12;
	const payment =
		(values.amount * monthlyRate) /
		(1 - Math.pow(1 / (1 + monthlyRate), numberOfPayments));
	return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById("monthly-payment").textContent = `$${monthly}`;
}
