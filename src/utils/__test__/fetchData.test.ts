/* eslint-disable @typescript-eslint/no-namespace */
import { fetchData } from "./../fechData";

declare global {
  namespace NodeJS {
    interface Global {
      fetch: jest.Mock<Promise<Response>>;
    }
  }
}

describe("fetchData", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should make a request with the correct method, URL, and headers", async () => {
    const method = "GET";
    const url = "/bp/products";
    const data = null;
    const baseUrl =
      "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products";
    const authorId = "2";
    const contentType = "application/json";

    await fetchData(method, url, data);

    expect(global.fetch).toHaveBeenCalledWith(baseUrl, {
      method: method,
      headers: {
        authorId: authorId,
        "Content-Type": contentType,
      },
      body: data ? JSON.stringify(data) : null,
    });
  });

  it("should return the response JSON if the request is successful", async () => {
    const method = "GET";
    const url = "/bp/products";
    const data = null;
    const responseJson = { message: "Success" };
    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseJson),
    };

    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve(response)
    );

    const result = await fetchData(method, url, data);

    expect(result).toEqual(responseJson);
  });

  it("should return the response object if the request is not successful", async () => {
    const method = "GET";
    const url = "/bp/products";
    const data = null;
    const response = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    };

    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve(response)
    );

    const result = await fetchData(method, url, data);

    expect(result).toEqual(response);
  });

  it("should return an error if an exception is thrown during the request", async () => {
    const method = "GET";
    const url = "/bp/products";
    const data = null;
    const error = new Error("Network Error");

    (global.fetch as jest.Mock).mockImplementation(() => Promise.reject(error));

    const result = await fetchData(method, url, data);

    expect(result).toEqual(error);
  });
});
