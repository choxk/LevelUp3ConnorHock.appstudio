// CAR LOAN

let carLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
let carLoanMonths = Number(prompt("Please enter your loan payment length (in number of months)."));
let carInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));

function carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate) {
    let carPaymentEquation = (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1);
    return carPaymentEquation;
};

let monthlyCarPayment = carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate);
alert(`A car loan for $${carLoanAmount} over ${carLoanMonths} months at a ${carInterestRate}% interest rate would have a monthly payment of $${monthlyCarPayment}.`);

// ex: A car loan for $30,000 over 50 months at a 3.2% interest rate would have a monthly payment of ${monthlyCarPayment}.
// (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1)
// (30,000 / 50) * ((3.2 / 100) + 1)
// (600) * (1.032)
// = $619.20