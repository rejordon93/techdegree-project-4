
let inLoop = true
let loopInterval = null;
const buttons = document.getElementsByClassName('button');

const quotes = [
  {
    quote: "Don’t let the noise of others’ opinions drown out your own inner voice.",
    source: "Steve Jobs",
    citation: "Stanford University commencement speech,",
    year: 2005,
  },
  {
    quote: "I say something, and then it usually happens. Maybe not on schedule, but it usually happens.",
    source: "Elon Musk",
    year: 2019,
  },
  {
    quote: "I don’t want a Black History Month. Black history is American history.",
    source: "Morgan Freeman",
    year: 2005,
  },
  {
    quote: "I think a role model is a mentor – someone you see on a daily basis, and you learn from them.",
    source: "Denzel Washington",
    year: 2013,
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk", 
    year: 2018, 
  }
]


const colors = [
  "#4169E1",
  "#00CED1",
  "#2f4f4f",
  "#696969",
  "#Bc8f8f"
]

const getRandomNumber = ceiling => Math.floor(Math.random() * ceiling);

const getRandomItem = array => {
  let index = getRandomNumber(array.length);
  let item = array[index];
  return item
}

const getRandomQuote = quotes => getRandomItem(quotes);
const getRandomColor = colors => getRandomItem(colors);

const printQuote = () => {
  let randomQuote = getRandomQuote(quotes);

  // Make sure the new quote isn't the same as the old quote
  const currentQuote = document.getElementsByClassName('quote')[0].innerText
  while (randomQuote.quote === currentQuote) {
    randomQuote = getRandomQuote(quotes);
  }
  let message = "";

  // build HTML
  message += "<p class = \"quote\">" + randomQuote.quote + "</p>";
  message += "<p class = \"source\">" + randomQuote.source;

  if (randomQuote.citation) {
    message += "<span class = \"citation\">" + randomQuote.citation + "</span>";
  }

  if (randomQuote.year) {
    message += "<span class = \"year\">" + randomQuote.year + "</span>";
  }

  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;

  // Change background color of page and buttons
  const newBackgroundColor = getRandomColor(colors);

  document.body.style.backgroundColor = newBackgroundColor;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.background = newBackgroundColor;
  }

}


const manageLoop = () => {
  if (inLoop) {
    loopInterval = setInterval(printQuote, 10000)
  } else {
    clearInterval(loopInterval);
  }
}

const switchLoopInterval = () => {
  const startStopButton = document.getElementById('startStopLoop');
  inLoop = !inLoop;
  if (inLoop) {
    startStopButton.innerText = "Pause"
  } else {
    startStopButton.innerText = "Start"
  }
  manageLoop()
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('startStopLoop').addEventListener("click", switchLoopInterval, false);
manageLoop()