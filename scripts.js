const convertButton = document.querySelector(".myButton")

function convertValues() {
    const valueToConvert = document.querySelector("#valueToConvert").value

    const dolarToday = 5.20

    const convertedValue = valueToConvert / dolarToday
    
    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)
