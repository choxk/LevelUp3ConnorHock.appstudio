// HOME LOAN

let homeLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
let homeLoanYears;
    while (homeLoanYears !===15 || homeLoanYears !===30) {
        alert("Invalid length. Must enter 15 or 30 for mortage length.");
        homeLoanYears = prompt("What is the secret password?");
}
let homeInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));

function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
    let homePaymentEquation = (homeLoanAmount / (homeLoanYears / 12)) * ((homeInterestRate / 100) + 1);
    return homePaymentEquation;
};

let monthlyHomePayment = homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate);
alert(`A home loan for $${homeLoanAmount} over ${homeLoanYears} years at a ${homeInterestRate}% interest rate would have a monthly payment of $${monthlyHomePayment}.`);




/*

if (homeLoanYears !===15 || homeLoanYears !===30) {
        alert("Invalid length. Must enter 15 or 30 for mortage length.");
} else {

    }
    
let homeLoanYears = Number(prompt("Please enter your mortage length (in years)."));

*/

