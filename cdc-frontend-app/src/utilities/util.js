export function handleAPIURL() {
  return `http://${process.env.NODE_ENV === "development"
      ? "localhost:1337"
      : "api.cdcunc.com"
    }`;
}