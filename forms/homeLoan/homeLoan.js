// HOME LOAN

let homeLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
let homeLoanYears = Number(prompt("Please enter your mortage length (in years)."));  
let homeInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));

function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
    let homePaymentEquation = homeLoanAmount / (homeLoanYears * 12) * ((homeInterestRate / 100) + 1);
    return homePaymentEquation;
};

let monthlyHomePayment = homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate);
alert(`A home loan for $${homeLoanAmount} over ${homeLoanYears} years at a ${homeInterestRate}% interest rate would have a monthly payment of $${monthlyHomePayment.toFixed(2)}.`);


// SHOULD BE: A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $587.22.


/*
// Term can only be 15 or 30 years.
let homeLoanYears = ;
do{
  var checkHomeYears = Number(prompt("Mortage length must 15 or 30 years. Please re-enter."));
} while(checkHomeYears !== homeLoanYears)
*/