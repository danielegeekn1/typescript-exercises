"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// Add a tuple type annotation for this tuple.
var countryPopulation = ["China", 1412600000];
console.log(countryPopulation);
var countryCurrency = ["Italy", "Euro", "EUR"];
console.log(countryCurrency);
// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.
var countryLanguage = ["Greece", "Greek"];
//countryLanguage.reverse();property reverse does not exist on readonly properties
console.log(countryLanguage);
