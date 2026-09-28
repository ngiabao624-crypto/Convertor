//conversions
    //weight
    const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
    const poundsToKilograms = (pounds: number): number => pounds * 0.45359237;

    //distance
    const milesToKilometres = (miles: number): number => miles * 1.609344;
    const kilometresToMiles = (kilometres: number): number => kilometres * 0.62137119;

    //temperature
    const celsiusToFahrenheit = (celsius: number): number => (celsius* 9/5) + 32;
    const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5/9;

//get id
    // get kg
    const kgInput = document.getElementById("kg-input") as HTMLInputElement;
    const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
    const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;

    //get lb
    const lbInput = document.getElementById("lb-input") as HTMLInputElement;
    const lbButton = document.getElementById("lb-button") as HTMLButtonElement;
    const lbResult = document.getElementById("lb-result") as HTMLParagraphElement;

    //get miles
    const milesInput = document.getElementById("miles-input") as HTMLInputElement;
    const milesButton= document.getElementById("miles-button") as HTMLButtonElement;
    const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;

    //get kilometres
    const kilometresInput = document.getElementById("kilo-input") as HTMLInputElement;
    const kilometresButton = document.getElementById("kilo-button") as HTMLButtonElement;
    const kilometresResult = document.getElementById("kilo-result") as HTMLParagraphElement;

    //get celsius
    const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
    const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
    const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;

    //get fahrenheit
    const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
    const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
    const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;

//calculate
    //calculate Pounds
    const handleKgConvert = (): void => {
        const kilograms: number = Number(kgInput.value);
        const pounds: number = kilogramsToPounds(kilograms);
        kgResult.textContent = pounds.toFixed(2); //textContent is the text inside the html element
    }
    if(kgButton){ //from chatgpt. makes sure that there is a button, originally I was doing it without the if
        kgButton.addEventListener("click",handleKgConvert);
    }
    //calculate Kilograms
    const handleLbConvert = (): void => {
        const pounds: number = Number(lbInput.value);
        const kilograms: number = poundsToKilograms(pounds);
        lbResult.textContent = kilograms.toFixed(2);
    }
    if (lbButton) {
        lbButton.addEventListener("click", handleLbConvert);
    }

/*Calculate Kilometres*/
    const handleMilesConvert = (): void => {
        const miles: number = Number(milesInput.value);
        const kilometres: number = milesToKilometres(miles);
        milesResult.textContent = kilometres.toFixed(2);
    }
    if (milesButton) {
    milesButton.addEventListener("click", handleMilesConvert);
    }

/*Calculate Miles still kilometres components*/ 
    const handleKilometresConvert = (): void => { 
        const kilometres: number = Number(kilometresInput.value); //old
        const miles: number = kilometresToMiles(kilometres); //new
        kilometresResult.textContent = miles.toFixed(2); //setting old with new
    }
    if (kilometresButton) {
        kilometresButton.addEventListener("click", handleKilometresConvert);
    }

/*Calculate Fahrenheit*/
    const handleCelsiusConvert = (): void => {
        const celsius: number = Number(celsiusInput.value);
        const fahrenheit: number = celsiusToFahrenheit(celsius);
        celsiusResult.textContent = fahrenheit.toFixed(2);
    }
    if (celsiusButton) {
        celsiusButton.addEventListener("click", handleCelsiusConvert);
    }

/*Calculate Celsius*/
    const handleFahrenheitConvert = (): void => {
        const fahrenheit: number = Number(fahrenheitInput.value);
        const celsius: number = fahrenheitToCelsius(fahrenheit);
        fahrenheitResult.textContent = celsius.toFixed(2);
    }
    if (fahrenheitButton) {
        fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
    }


