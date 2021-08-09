const apiURL = "http://localhost:5000";

async function client(
  endpoint: string,
  options?: { data?: any; headers?: Headers }
) {
  const { data, headers: customHeaders, ...customConfig } = options || {};
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  } as RequestInit;

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
