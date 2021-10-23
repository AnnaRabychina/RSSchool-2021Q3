const nextQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let numQuote = 0;

async function getQuotes() {  
  const quotes = './data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  quote.textContent = `${data[numQuote].text}`;
  author.textContent = `${data[numQuote].author}`;
}

function changeQuote() {
  numQuote === 100 ? numQuote =0 : numQuote =  numQuote + 1;
  getQuotes();
}

getQuotes()
nextQuote.addEventListener('click', changeQuote);

export {nextQuote, quote, author, numQuote, getQuotes, changeQuote}