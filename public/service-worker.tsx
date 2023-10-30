chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === "callAPI") {
    // Make the API call here
    fetch("https://api.quotable.io/quotes/random?limit=3")
      .then((response) => response.json())
      .then((data) => {
        sendResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
    // Return true to indicate that you're sending a response asynchronously
    return true;
  }
});
