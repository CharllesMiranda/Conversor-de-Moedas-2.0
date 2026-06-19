const convertButton = document.querySelector(".myButton")

function convertValues() {
    const valueToConvert = document.querySelector("#valueToConvert").value
    const valueForConversion = document.querySelector(".valueOne")
    const ConvertedValue = document.querySelector(".valueTwo")

    const dolarToday = 5.20

    const convertedValue = valueToConvert / dolarToday

    valueForConversion.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueToConvert)

    ConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    
}

convertButton.addEventListener("click", convertValues)
