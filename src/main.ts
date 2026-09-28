// 1. Core Conversions (Your math stays exactly the same)
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds * 0.45359237;

const milesToKilometres = (miles: number): number => miles * 1.609344;
const kilometresToMiles = (kilometres: number): number => kilometres * 0.62137119;

const celsiusToFahrenheit = (celsius: number): number => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5/9;


// 2. Get HTML Elements
const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;

const lbInput = document.getElementById("lb-input") as HTMLInputElement;
const lbButton = document.getElementById("lb-button") as HTMLButtonElement;
const lbResult = document.getElementById("lb-result") as HTMLParagraphElement;

const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton= document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;

const kilometresInput = document.getElementById("kilo-input") as HTMLInputElement;
const kilometresButton = document.getElementById("kilo-button") as HTMLButtonElement;
const kilometresResult = document.getElementById("kilo-result") as HTMLParagraphElement;

const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;

const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;



// This takes the input string ("12, 12") and the math function, and uses mapping to process the array.
const convertWithMapping = (inputValue: string, conversionMath: (val: number) => number): string => {
    // Split the string into an array wherever there is a comma
    const stringArray = inputValue.split(",");
    
    // Use .map() to convert every string item into a clean number
    const numberArray = stringArray.map(item => Number(item.trim()));
    
    // Use .map() again to run your math equation on every number in the array
    const convertedArray = numberArray.map(conversionMath);
    
    // Use .map() one last time to format to 2 decimal places, then join back into a string with commas
    return convertedArray.map(result => result.toFixed(2)).join(", ");
};


// 4. Calculate & Event Listeners
if (kgButton) { 
    kgButton.addEventListener("click", () => {
        kgResult.textContent = convertWithMapping(kgInput.value, kilogramsToPounds);
    });
}

if (lbButton) {
    lbButton.addEventListener("click", () => {
        lbResult.textContent = convertWithMapping(lbInput.value, poundsToKilograms);
    });
}

if (milesButton) {
    milesButton.addEventListener("click", () => {
        milesResult.textContent = convertWithMapping(milesInput.value, milesToKilometres);
    });
}

if (kilometresButton) {
    kilometresButton.addEventListener("click", () => {
        kilometresResult.textContent = convertWithMapping(kilometresInput.value, kilometresToMiles);
    });
}

if (celsiusButton) {
    celsiusButton.addEventListener("click", () => {
        celsiusResult.textContent = convertWithMapping(celsiusInput.value, celsiusToFahrenheit);
    });
}

if (fahrenheitButton) {
    fahrenheitButton.addEventListener("click", () => {
        fahrenheitResult.textContent = convertWithMapping(fahrenheitInput.value, fahrenheitToCelsius);
    });
}