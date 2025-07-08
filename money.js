const exchangeRates = {
  USD: { INR: 83.2, EUR: 0.91, GBP: 0.78, USD: 1 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093, INR: 1 },
  EUR: { USD: 1.1, INR: 91.5, GBP: 0.86, EUR: 1 },
  GBP: { USD: 1.28, INR: 101.2, EUR: 1.16, GBP: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultElement = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultElement.innerText = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[from][to];
  const result = amount * rate;
  resultElement.innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
