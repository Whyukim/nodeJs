export default class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    if (res.statusCode > 299 || res.statusCode < 200) {
      const message = data?.message || "Somthing went wrong";
      throw new Error(message);
    }

    return data;
  }
}
