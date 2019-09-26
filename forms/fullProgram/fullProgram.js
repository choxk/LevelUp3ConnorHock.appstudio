/* SCENARIO: Scenario: You are creating an app for a financial institution to give out free to customers. 
It will provide them a way to calculate monthly payments for car loans and home loans given a specific amount of the loan, 
timeframe, and interest rate. Assume no down-payments. */

alert("Welcome to the monthly loan payment calculator.");
let chooseCalculator = prompt("Please enter which calculator you would like to use: 'car' or 'house'.");
    if (chooseCalculator == "car") {
        alert("Thank you for selecting the monthly car loan payment calculator.");
    } else if (chooseCalculator == "house") {
        alert("Thank you for selecting the monthly house loan payment calculator.");
    } else {
        alert("Invalid Input. Have a nice day.");
    };