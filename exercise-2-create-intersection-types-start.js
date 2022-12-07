"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// I only joined Country and CountryLanguages interfaces since they contain the property type the
//countryA object requires
var countryA = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
};
// Use the type alias syntax: type CountryWithStatistics = type;
//
// Add a type annotation with the `CountryWithStatistics` type on
// the variable `countryB`.
var countryB = {
    name: "China",
    code: "CN",
    population: 1412600000
};
// ----
console.log(countryB);
