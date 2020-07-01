document.addEventListener(
  "DOMContentLoaded",
  function() {
    var convertButton = document.getElementById("covert");
    convertButton.addEventListener("click", event => hanndleClick(event));
  },
  false
);

const hanndleClick = async event => {
  event.preventDefault();
  var usdValue = document.getElementById("usd");
  getInrValue(usdValue.value);
};

const getInrValue = async usdValue => {
  const response = await fetch(
    "https://api.exchangeratesapi.io/latest?base=USD"
  );
  jsonRes = await response.json();
  inrValue = jsonRes.rates.INR * usdValue;
  document.getElementById("p2").innerHTML = "Value in INR -    " + inrValue;
};
