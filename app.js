const quotesURL = `https://api.quotable.io/random`;
const authorName = document.querySelector(`#author`);
const quoteLine = document.querySelector(`#quote`);
function generateQuote() {
  fetch(quotesURL)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    authorName.innerText = data.author;
    quoteLine.innerText = data.content;
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });
}
generateQuote();