import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseUrl: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {
    const {response} = error;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }
    console.log(response);
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
