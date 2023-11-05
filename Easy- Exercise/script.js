//waits for html file to load
document.addEventListener('DOMContentLoaded', function () {
    //alert with instructions
    alert('Enter your exercise in the first text box. Press enter key to submit.')

    let input = document.getElementById('input');
    let display = document.getElementById('display');

    //function for submitting
    function handleKeyPress(event) {
        if (event.key === 'Enter') {

            //displays in text box and console logs
            display.value = "Today's exercise: " + input.value + '.';
            console.log(display.value);
        }
    };
    //when key is pressed, function is called
    input.addEventListener("keypress", handleKeyPress);
});