const displaySwtich = document.querySelector('#display-switch');
const convertBtn = document.querySelector('#convert-btn');
const metersFeetText = document.querySelector('#meters-feet');
const literGallonsText = document.querySelector('#liters-Gallons');
const kilogramsPoundsText = document.querySelector('#kilograms-Pounds');

convertBtn.addEventListener('click', function convertValues() {

    const numberInput = document.querySelector('#number-input').value;

    const meter = 3.281
    const liter = 0.264
    const kilogram = 2.204
    
    metersFeetText.textContent = `${numberInput} meters = ${(meter * numberInput).toFixed(3)} feet | ${numberInput} feet = ${(numberInput / meter).toFixed(3)} meters`;
    
    literGallonsText.textContent = `${numberInput} liters = ${(liter * numberInput).toFixed(3)} gallons | ${numberInput} Gallons = ${(numberInput / liter).toFixed(3)}`;
    
    kilogramsPoundsText.textContent = `${numberInput} kilograms = ${(kilogram * numberInput).toFixed(3)} pounds | ${numberInput} pounds = ${(numberInput / kilogram).toFixed(3)}`;  
});

displaySwtich.addEventListener('click', function handleDisplayToggle() {
    const convertedContainer = document.querySelector('.converted-cont')
    const result = document.querySelectorAll('.result-cont')
    const measurement = document.querySelectorAll('.measurement')
    const resultText = document.querySelectorAll('.result')
    
    
    if (displaySwtich.checked) {
        darkModeOn(result, 'blue')
        darkModeOn(resultText, 'white')
        darkModeOn(measurement, 'light-text')
        convertedContainer.classList.add('dark-blue')
    } else {
        darkModeOff(result, 'blue')
        darkModeOff(resultText, 'white')
        darkModeOff(measurement, 'light-text')
        convertedContainer.classList.remove('dark-blue')
    }
    
    
    function darkModeOn (el, className) {
        for (let i = 0; i < el.length; i++) {
            el[i].classList.add(className)
        }
    }
    
    function darkModeOff (el, className) {
        for (let i = 0; i < el.length; i++) {
            el[i].classList.remove(className)
        }
    }
})