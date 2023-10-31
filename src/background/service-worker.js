if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.ts")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

self.addEventListener("message", (event) => {
  if (event.data.action === "callAPI") {
    console.log("entering....");
    // Make the API call here
    fetch("https://api.quotable.io/quotes/random?limit=3")
      .then((response) => response.json())
      .then((data) => {
        event.source.postMessage(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    event.source.postMessage("failed");
    console.log("exiting...");
  }
});
