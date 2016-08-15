function processForm() {

    var temperature = Number(document.tempForm.temp.value);
    var tempType;
    var result;

    for (var i=0; i < document.tempForm.choice.length; i++) {

        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }

    if (tempType == 'fahrenheit') {
        result = temperature * 9/5 + 32;
    }

    else {
        result = (temperature -  32)  *  5/9;
    }

    // Assign the result field value here
    document.tempForm.resultField.value = result;
};





// function toCelsius (x) {

// }

// function toFahrenheit (x) {

// }

// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);

//   if (document)
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

// // ******************************************************************

// function toCelsius (c) {
//   value * 9 / 5 + 32;

// }

// function toFahrenheit (f) {
//   value -32 * 5 / 9;

}

