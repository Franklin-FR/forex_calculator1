
async function calculateExchange() {
  const amount = document.getElementById('amount').value;
  const currency = document.querySelector('input[name="currency"]:checked').value;

  // Fetch exchange rate from the Frankfurter API
  const apiUrl = `https://api.frankfurter.app/latest?from=${currency}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Extract exchange rate for the selected currency
  const exchangeRate = data.rates[currency === 'USD' ? 'ZAR' : 'USD'];

  // Display the result
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `Exchange Rate: 1 ${currency} = ${exchangeRate.toFixed(2)} ${currency === 'USD' ? 'ZAR' : 'USD'}<br>`;
  resultContainer.innerHTML += `Converted Amount: ${amount} ${currency} = ${(amount * exchangeRate).toFixed(2)} ${currency === 'USD' ? 'ZAR' : 'USD'}`;
}