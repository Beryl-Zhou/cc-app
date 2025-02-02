import axios from "axios";
import _ from "lodash";

// // AbortController
// // Starting from v0.22.0 Axios supports AbortController to cancel requests in fetch API way:

// const controller = new AbortController();

// // cancel the request
// controller.abort()

interface IConfig {
  method: string;
  params?: string;
  requestData?: string;
  token?: string;
  headers?: { contentType: string };
}

const REQUEST_TIMEOUT = 10000;
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: REQUEST_TIMEOUT,
});

export const api = async (
  endpoint: string,
  { method, params, requestData, token, headers, ...customConfig }: IConfig
) => {
  const config = {
    method,
    headers: {
      Authorization: token ? `${token}` : "",
      "Content-Type": headers?.contentType ? headers.contentType : "application/json",
      ..._.omit(headers, ["contentType"]),
    },
    params,
    data: requestData,
    ...customConfig,
  };

  const response = await axiosInstance(endpoint, { ...config });
  return response;
};

// For testing only, TODO: remove
// export async function fetchPost(id) {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(`This is post ID ${id}`);
//     }, 500)
//   );
// }
