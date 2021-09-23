export function handleAPIURL() {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://localhost:1337"
    default:
      return "https://api.cdcunc.com";
  }
}

export function handleEndpoint(endpoint, setter) {
  if (!setter) return {};
  const controller = new AbortController();
  const signal = controller.signal;

  const saved = window.sessionStorage.getItem(`api.cdcunc.com/${endpoint}`);
  saved && setter(JSON.parse(saved));

  fetch(`${handleAPIURL()}/${endpoint}`, { signal }).then(data => data.json()).then(contents => {
    window.sessionStorage.setItem(`api.cdcunc.com/${endpoint}`, JSON.stringify(contents))
    setter(contents);
  }).catch(error => console.error(error));

  return controller;
}