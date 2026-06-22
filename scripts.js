const convertButton = document.querySelector(".myButton")
const inputConvertTo = document.querySelector("#inputConvertTo")

function convertValues() {
    const valueToConvert = document.querySelector("#valueToConvert").value
    const valueForConversion = document.querySelector(".valueOne")
    const ConvertedValue = document.querySelector(".valueTwo")

    const dolarToday = 5.20
    const euroToday = 6.20

    if (inputConvertTo.value == "dolar") {
        ConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueToConvert / dolarToday)
    }

    if (inputConvertTo.value == "euro") {
        ConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueToConvert / euroToday)
    }

    valueForConversion.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueToConvert)

}

function changedCurrency() {
    const money2 = document.querySelector(".money2")
    const currencyName = document.querySelector(".currencyName")
    const valueTwo = document.querySelector(".valueTwo")

    if (inputConvertTo.value == "dolar") {
        money2.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar Americano"  
    }

    if (inputConvertTo.value == "euro") {
        money2.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    convertValues()
}

inputConvertTo.addEventListener("change", changedCurrency)
convertButton.addEventListener("click", convertValues)
