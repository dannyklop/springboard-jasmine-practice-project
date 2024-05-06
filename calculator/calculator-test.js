it("should calculate the monthly rate correctly", function () {
	// Setup example values
	const values = { amount: 20000, years: 4, rate: 5.5 };
	// Expected monthly payment
	const monthlyRate = calculateMonthlyPayment(values);
	// Convert string to number for comparison to avoid precision issues with floating points
	const expected = parseFloat(
		(20000 * (5.5 / 100 / 12)) / (1 - Math.pow(1 + 5.5 / 100 / 12, -4 * 12))
	).toFixed(2);
	expect(monthlyRate).toEqual(expected);
});

it("should return a result with 2 decimal places", function () {
	// Setup example values
	const values = { amount: 30000, years: 7, rate: 4.5 };
	// This will return the string with two decimal places
	const monthlyRate = calculateMonthlyPayment(values);
	// Check if the returned string is correctly formatted to 2 decimal places
	// by checking if the decimal part has exactly two digits
	expect(monthlyRate.split(".")[1].length).toEqual(2);
});

/// etc
