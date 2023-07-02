/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (method: string, url: string, data: any) => {
  const baseUrl = `${
    process.env.VITE_API_URL ||
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros"
  }${url}`;
  const options = {
    method: method,
    headers: {
      authorId: process.env.VITE_API_KEY || "2",
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  };
  try {
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
      return response;
    }
    return await response.json();
  } catch (error) {
    return error;
  }
};
