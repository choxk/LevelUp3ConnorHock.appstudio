/* SCENARIO: Scenario: You are creating an app for a financial institution to give out free to customers. 
It will provide them a way to calculate monthly payments for car loans and home loans given a specific amount of the loan, 
timeframe, and interest rate. Assume no down-payments. */

let i = 0
for (i; i < 10; i++) {
alert("Welcome to the monthly loan payment calculator.");
let chooseCalculator = prompt("Please enter which calculator you would like to use: 'car' or 'house'.");
  if (chooseCalculator == "car") {
    alert("Thank you for selecting the monthly car loan payment calculator.");
        
    let carLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
    let carLoanMonths = Number(prompt("Please enter your loan payment length (in number of months)."));
    let carInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));

    function carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate) {
    let carPaymentEquation = (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1);
    return carPaymentEquation;
    };

    let monthlyCarPayment = carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate);
    alert(`A car loan for $${carLoanAmount} over ${carLoanMonths} months at a ${carInterestRate}% interest rate would have a monthly payment of $${monthlyCarPayment.toFixed(2)}.`);
    
    let exitCommand = prompt("Thank you for using our calculator. Please enter 'exit' if you wish to leave.");
        if (exitCommand == "exit") {
        break; }

  } else if (chooseCalculator == "house") {
    alert("Thank you for selecting the monthly house loan payment calculator.");
     
    let homeLoanAmount = Number(prompt("Please enter your loan amount (without $ sign)."));
    let homeLoanYears = Number(prompt("Please enter your mortage length (in years: either 15 or 30)."));  
    let homeInterestRate = Number(prompt("Please enter your interest rate (without % sign)."));

    function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
    let homePaymentEquation = homeLoanAmount / (homeLoanYears * 12) * ((homeInterestRate / 100) + 1);
    return homePaymentEquation;
    };

    let monthlyHomePayment = homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate);
    alert(`A home loan for $${homeLoanAmount} over ${homeLoanYears} years at a ${homeInterestRate}% interest rate would have a monthly payment of $${monthlyHomePayment.toFixed(2)}.`);
    
    let exitCommand2 = prompt("Thank you for using our calculator. Please enter 'exit' if you wish to leave.");
        if (exitCommand2 == "exit") {
        break; }
    
    } else {
        alert("Invalid Input. Please retry.");
    }};
    
alert("Thank you for using the monthly house loan payment calculator.");