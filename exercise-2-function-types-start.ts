/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value): number {
  return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

//doubleThePopulation("6.12"); uncorrect until we passed this type to the return type of the function
// in this way
/*
function doubleThePopulation(value): number | string {
  return value ; // not *2 because it's not possible to execute that operation
}
*/
doubleThePopulation(8_526);

//doubleThePopulation(false);//doubleThePopulation("6.12"); uncorrect until we passed this type to the return type of the function
// in this way
/*
function doubleThePopulation(value): number | boolean {
  return value// not possibile to make the operation times *2 
}
*/

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): void {
  console.log(`The languages spoken in ${country} are:`);

  console.log(language1);

  console.log(language2);
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Europe", "Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
