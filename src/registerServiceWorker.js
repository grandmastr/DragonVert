if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", {
      scope: "/"
    })
    .then(registration => {
      console.log("Service worker has been registered", registration);
    })
    .catch(e => console.log("Registration failed", e));
}
