export const saveAuthTokenInSessions = (token) => {
  window.localStorage.setItem("token", token);
};

export const getSessionToken = () => {
  const token = window.localStorage.getItem("token");
  return token;
};
