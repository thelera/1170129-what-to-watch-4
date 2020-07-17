import axios from "axios";
import {API} from "./utils/consts.js";

const Error = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.CREDENTIALS,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
