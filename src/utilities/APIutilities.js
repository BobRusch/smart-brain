import _ from "lodash";
import { getSessionToken } from "./authUtilities";

export const API_GET = "GET",
  API_PUT = "PUT",
  API_POST = "POST";

export const APIPut = (target, body = {}) => {
  return APIfetch(target, API_PUT, body);
};

export const APIGet = (target) => {
  return APIfetch(target, API_GET);
};

export const APIPost = (target, body = {}) => {
  return APIfetch(target, API_POST, body);
};

export const APIfetch = (target, method, body = {}) => {
  const token = getSessionToken();
  let pkt = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (_.isNull(token)) {
    pkt = {
      ...pkt,
    };
  } else {
    pkt = {
      ...pkt,
      headers: { ...pkt.headers, authorization: token },
    };
  }

  if (method !== API_GET && !_.isEmpty(body)) {
    pkt = {
      ...pkt,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  return fetch(`http://localhost:3000/${target}`, pkt);
};
