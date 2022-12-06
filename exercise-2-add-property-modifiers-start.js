"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
var countryA = {
    name: "India",
    code: "IN",
    population: 1352642280
};
var countryB = {
    name: "Italy",
    code: "IT"
};
var countryC = {
    name: "Spain",
    code: "ES",
    population: 47450795
};
console.log(countryA, countryB, countryC);
var currencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€"
};
//currencyData.name = "Gold"; - we cannot change values of a property we set to be read-only
currencyData.code = "GGG";
