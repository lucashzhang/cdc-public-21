export function handleAPIURL() {
  return `https://${process.env.NODE_ENV === "development"
    ? "localhost:1337"
    : "api.cdcunc.com"
    }`;
}

export function handleEndpoint(endpoint, setter) {
  if (!setter) return {};
  const controller = new AbortController();
  const signal = controller.signal;

  const saved = window.localStorage.getItem(`api.cdcunc.com/${endpoint}`);
  saved && setter(JSON.parse(saved));

  fetch(`${handleAPIURL()}/${endpoint}`, { signal }).then(data => data.json()).then(contents => {
    window.localStorage.setItem(`api.cdcunc.com/${endpoint}`, JSON.stringify(contents))
    setter(contents);
  }).catch(error => console.error(error));

  return controller;
}