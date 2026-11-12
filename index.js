const ageForm = document.querySelector("#age");
const ageError = document.querySelector("#age-error");
const checkBtn = document.querySelector(".check-btn");
const resultText = document.querySelector(".result-text");
const resultBox = document.querySelector(".result-box");


checkBtn.addEventListener("click", function() {
    const age = Number(ageForm.value);

    let isValid = true;

    if(ageForm.value === "") {
        ageForm.classList.add("input-error");
        ageError.textContent = "Please enter your age.";
        isValid = false;

    } else if(age < 1) {
        ageForm.classList.add("input-error");
        ageError.textContent = "Please enter an age of at least 1 year.";
         isValid = false;

    } else if(!Number.isInteger(age)) {
        ageForm.classList.add("input-error");
        ageError.textContent = "Please enter a whole number.";
        isValid = false;

    } else {
        ageForm.classList.remove("input-error");
        ageError.textContent = "";
    }
    if(isValid === false) {
        resultBox.classList.remove(
            "is-child", 
            "is-teenager", 
            "is-adult",
            "has-result"
        );

        resultText.textContent = "Your result will appear here.";
         
        return;
    }

    resultBox.classList.remove(
        "is-child", 
        "is-teenager", 
        "is-adult"
    );

    resultBox.classList.add("has-result");

    if(age < 13) {
        resultText.textContent = "You are a child.";
        resultBox.classList.add("is-child");

    } else if(age < 18) {
        resultText.textContent = "You are a teenager.";
        resultBox.classList.add("is-teenager");

    } else {
        resultText.textContent = "You are an adult.";
        resultBox.classList.add("is-adult");
    } 
});

ageForm.addEventListener("input", function() {
    ageError.textContent = "";
    ageForm.classList.remove("input-error");
    resultBox.classList.remove(
        "is-child",
        "is-teenager",
        "is-adult",
        "has-result"
    );
    resultText.textContent = "Your result will apper here."
});