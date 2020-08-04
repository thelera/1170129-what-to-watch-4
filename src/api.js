import axios from "axios";
import {Api, ErrorStatusCode} from "./utils/consts";

const createApi = (onUnauthorized, resetError) => {
  const api = axios.create({
    baseURL: Api.BASE_URL,
    timeout: Api.TIMEOUT,
    withCredentials: Api.CREDENTIALS,
  });

  const onSuccess = (response) => {
    if (response.status === ErrorStatusCode.OK) {
      resetError();
    }
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === ErrorStatusCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};
