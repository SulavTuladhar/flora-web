"use client";

import axios from "axios";
import { getCookie } from "cookies-next";

const BASE_URL = "http://172.16.0.2:9191/";

const cookie = getCookie("token");

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  timeoutErrorMessage: "Takes too long for response",
  withCredentials: true,
});

const getHeaders = (secured: boolean, multipart: boolean = false) => {
  var options: any;
  if (multipart) {
    options = {
      "Content-Type": "multipart/form-data",
    };
  } else {
    options = {
      "Content-Type": "application/json",
    };
  }
  if (secured) {
    options["authorization"] = cookie;
  }
  return options;
};

const GET = (url: string, isSecure = false, params = {}) => {
  return http.get(url, {
    headers: getHeaders(isSecure),
    params,
  });
};

const POST = (
  url: string,
  data: {},
  isSecure = false,
  multipart = false,
  params = {}
) => {
  return http.post(url, data, {
    headers: getHeaders(isSecure, multipart),
    params,
    withCredentials: true,
  });
};

const PUT = (
  url: string,
  data: {},
  isSecure = false,
  multipart = false,
  params = {}
) => {
  return http.put(url, data, {
    headers: getHeaders(isSecure, multipart),
    params,
  });
};

const DELETE = (url: string, isSecure = false, params = {}) => {
  return http.delete(url, {
    headers: getHeaders(isSecure),
    params,
  });
};

export const httpClient = {
  GET,
  POST,
  PUT,
  DELETE,
};
