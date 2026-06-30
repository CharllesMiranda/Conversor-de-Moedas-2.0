const buttomConvert = document.querySelector(".myButton")                   // Botão de converter
const inputConvertFrom = document.querySelector("#inputConvertFrom")        // Converter De
const inputConvertTo = document.querySelector("#inputConvertTo")            // Converter Para
const money1 = document.querySelector(".money1")                            // Moeda 1 (Img da moeda de conversão)
const money2 = document.querySelector(".money2")                            // Moeda 2 (Img da moeda convertida)
const currencyName1 = document.querySelector(".currencyName1")              // Nome da moeda (moeda de conversão)
const currencyName2 = document.querySelector(".currencyName2")              // Nome da moeda (moeda convertida)
const valueOne = document.querySelector(".valueOne")                        // Valor 1 (Valor da primeira moeda)   
const valueTwo = document.querySelector(".valueTwo")                        // Valor 1 (Valor da segunda moeda)   


const realToday = 1
const dolarToday = 5
const euroToday = 6
const libraToday = 7

function convertMoney(valueMoney, coin) {                                   // Valor do dinheiro e Moeda                                           // Converter dinheiro

    if (coin == "real") {
        return (
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valueMoney)
        )
    }

    if (coin == "dolar") {
        return (
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valueMoney)
        )
    }

    if (coin == "euro") {
        return (
            new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valueMoney)
        )
    }

    if (coin == "libra") {
        return (
            new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valueMoney)
        )
    }

    console.log(valueMoney)
    console.log(coin)
}


function convert() {                                                        // Função Converter
    const valueToConvert = document.querySelector("#valueToConvert").value  // Valor a converter

    if (inputConvertFrom.value == "real" && inputConvertTo.value == "dolar") {

        const moneyReal = valueToConvert
        valueOne.innerHTML = convertMoney(moneyReal, "real")

        const moneyDolar = valueToConvert / dolarToday
        valueTwo.innerHTML = convertMoney(moneyDolar, "dolar")
    }

    if (inputConvertFrom.value == "real" && inputConvertTo.value == "euro") {

        const moneyReal = valueToConvert
        valueOne.innerHTML = convertMoney(moneyReal, "real")

        const moneyEuro = valueToConvert / euroToday
        valueTwo.innerHTML = convertMoney(moneyEuro, "euro")
    }


}

function editFirstCoin() {                                                 // Editar primeira moeda
    if (inputConvertFrom.value == "real") {
        money1.src = "./assets/real.png"
        currencyName1.textContent = "Real Brasileiro"
    }

    if (inputConvertFrom.value == "dolar") {
        money1.src = "./assets/dolar.png"
        currencyName1.textContent = "Dolar Americano"
    }

    if (inputConvertFrom.value == "euro") {
        money1.src = "./assets/euro.png"
        currencyName1.textContent = "Euro"
    }

    if (inputConvertFrom.value == "libra") {
        money1.src = "./assets/libra.png"
        currencyName1.textContent = "Libra"
    }
}

function editSecondaryCurrency() {                                                 // Editar segunda moeda
    if (inputConvertTo.value == "real") {
        money2.src = "./assets/real.png"
        currencyName2.textContent = "Real Brasileiro"
    }

    if (inputConvertTo.value == "dolar") {
        money2.src = "./assets/dolar.png"
        currencyName2.textContent = "Dolar Americano"
    }

    if (inputConvertTo.value == "euro") {
        money2.src = "./assets/euro.png"
        currencyName2.textContent = "Euro"
    }

    if (inputConvertTo.value == "libra") {
        money2.src = "./assets/libra.png"
        currencyName2.textContent = "Libra"
    }
}


inputConvertFrom.addEventListener("change", editFirstCoin) // Trocando a moeda de Converter de
inputConvertTo.addEventListener("change", editSecondaryCurrency)   // Trocando a moeda de Converter para

buttomConvert.addEventListener("click", convert)            // Clicando no botão de converter
