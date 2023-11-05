document.addEventListener('DOMContentLoaded', function () {

    let slices = document.getElementById('slices');
    let people = document.getElementById('people');
    let display = document.getElementById('display');
    let calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function () {
        let slicesValue = parseInt(slices.value);
        let peopleValue = parseInt(people.value);

        if (!isNaN(slicesValue) && !isNaN(peopleValue) && slicesValue > 0 && peopleValue > 0) {
            function sharePizza(slices, people) {
                let slicesPerPerson = slices / people;
                display.textContent = `Each person gets ${slicesPerPerson} slices of pizza; from our ${slices} slice pizza.`;
                console.log(display.textContent);
            }
            sharePizza(slicesValue, peopleValue);
        } else {
            display.textContent = 'Invalid inputs. Please enter valid numbers for each area.';
        }
    });
});