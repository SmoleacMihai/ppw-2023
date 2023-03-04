const extractCurrencyValue = (currency) => {
    return Number(currency.substring(1));
}
console.log(extractCurrencyValue("$120"));