const bullshit = [
  "contemplate the landscape of the customer experience",
  "synergize in concert with the team-driven objectives",
  "what's a CNL?",
  "I don't understand how that's falsifying records",
  "a match made in stratus",
  "you're not a certified biomed",
  "we need a picture of the data plate",
  "if I get you the serial numbers, can you match faster?",
  "they called in about a billy rueben meter",
  "bridge the gap and delineate",
  "(micro)scopes aren't on the contract",
  "we need to hire some temps to exact match",
  "there's leftover food in the lunch box"
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * bullshit.length);
  document.getElementById("quoteDisplay").innerHTML = bullshit[randomNumber];
}
