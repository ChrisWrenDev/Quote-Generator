// Get Quotes From API
let apiQuotes = [];

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes[10]);
  } catch (e) {
    //Catch Error Here
    alert(e);
  }
}

//On Load
getQuotes();
