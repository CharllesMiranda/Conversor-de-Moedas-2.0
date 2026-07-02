const convertButton = document.querySelector(".myButton")
const inputConvertFrom = document.querySelector("#inputConvertFrom")
const inputConvertTo = document.querySelector("#inputConvertTo")


function editCurrency () {
    const valueToConvert = document.querySelector("#valueToConvert").value
    const valueForConversion = document.querySelector(".valueOne")

    if (inputConvertFrom.value == "real") {
        valueForConversion.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueToConvert)
    }
}

function convertValues() {
    const valueToConvert = document.querySelector("#valueToConvert").value
    const amountToBeConverted = document.querySelector(".valueOne")
    const convertedValue = document.querySelector(".valueTwo")

    const realToday = 1
    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 6.80

    if (inputConvertTo.value == "real") {
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueToConvert / realToday)
    }

    if (inputConvertTo.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueToConvert / dolarToday)
    }

    if (inputConvertTo.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueToConvert / euroToday)
    }

    if (inputConvertTo.value == "libra") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueToConvert / libraToday)
    }

    amountToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueToConvert)

}

function changedCurrency() {
    const money2 = document.querySelector(".money2")
    const currencyName = document.querySelector(".currencyName")
    const valueTwo = document.querySelector(".valueTwo")

    if (inputConvertTo.value == "real") {
        money2.src = "./assets/real.png"
        currencyName.innerHTML = "Real Brasileiro"  
    }

    if (inputConvertTo.value == "dolar") {
        money2.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar Americano"  
    }

    if (inputConvertTo.value == "euro") {
        money2.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (inputConvertTo.value == "libra") {
        money2.src = "./assets/libra.png"
        currencyName.innerHTML = "Libra"
    }

    convertValues()
}

inputConvertFrom.addEventListener("change", editCurrency)
inputConvertTo.addEventListener("change", changedCurrency)
convertButton.addEventListener("click", convertValues)
