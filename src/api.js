import axios from "axios";
import {Api, ErrorStatus} from "./utils/consts.js";
import {ActionCreator as ErrorActionCreator} from "./reducer/errors/errors.js";
import {store} from "./index.js";

const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: Api.BASE_URL,
    timeout: Api.TIMEOUT,
    withCredentials: Api.CREDENTIALS,
  });

  const onSuccess = (response) => {
    if (response.status === ErrorStatus.OK.code) {
      store.dispatch(ErrorActionCreator.resetError());
    }
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === ErrorStatus.UNAUTHORIZED.code) {
      onUnauthorized();
    }

    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};
