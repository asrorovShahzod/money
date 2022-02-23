var elForm = document.querySelector("form");
var elFormInput = document.querySelector("input");
var elFormSelect = document.querySelector("select");
var elFormResult = document.querySelector("span");


var elTitle = document.querySelector("h1");



elForm.addEventListener("submit", function(e) {

    e.preventDefault();
    console.log(e);

    var elInputVal = elFormInput.value;
    var elSelectVal = elFormSelect.value;

    var res = elInputVal * elSelectVal;
    elFormResult.textContent = (`${elInputVal / elSelectVal}`);

})