export default {
  async fetch(request) {
    const url = new URL(request.url);
    const endpoint = url.pathname.replace("/", "");
    const target = "https://api.binance.com/" + endpoint + url.search;

    const response = await fetch(target, {
      method: request.method,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response;
  }
}
