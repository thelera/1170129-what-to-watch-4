import axios from "axios";
import {Api, ErrorStatus} from "./utils/consts.js";

const createApi = (onUnauthorized, resetError) => {
  const api = axios.create({
    baseURL: Api.BASE_URL,
    timeout: Api.TIMEOUT,
    withCredentials: Api.CREDENTIALS,
  });

  const onSuccess = (response) => {
    if (response.status === ErrorStatus.OK.code) {
      resetError();
    }
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === ErrorStatus.UNAUTHORIZED.code) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};
