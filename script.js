
async function calculateExchangeRate() {
    const amount = document.getElementById('amount').value;
    const currency = document.querySelector('input[name="currency"]:checked').value;

    // const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`;
  const apiUrl =  `https://v6.exchangerate-api.com/v6/a24dcd3797a9928758b58953/latest/USD${currency.toUpperCase()}`;
    // https://v6.exchangerate-api.com/v6/a24dcd3797a9928758b58953/latest/USD

    const response = await fetch(apiUrl);
    const data = await response.json();

    const exchangeRate = data.rates.USD;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Exchange Rate: 1 ${currency.toUpperCase()} = ${exchangeRate} USD<br>`;
    // resultContainer.innerHTML += `Converted Amount: ${amount} ${currency.toUpperCase()} = ${(amount * exchangeRate)} USD`;
    resultContainer.innerHTML += `Converted Amount: ${amount} ${currency.toUpperCase()} = ${(amount * exchangeRate).toFixed(2)} USD`;}