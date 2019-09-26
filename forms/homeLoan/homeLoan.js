// HOME LOAN

function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
    let homePaymentEquation = (homeLoanAmount / (homeLoanYears / 12)) * (1 + homeInterestRate);
    return homePaymentEquation;
};

let monthlyHomePayment = homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate);
alert(`A home loan for ${homeLoanAmount} over ${homeLoanYears} years at a ${homeInterestRate} interest rate would have a monthly payment of ${monthlyHomePayment}.`);

let homeLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
let homeLoanYears = Number(prompt("Please enter your mortage length (in years)."));
let homeInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));