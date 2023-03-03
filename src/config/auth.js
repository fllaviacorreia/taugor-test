import registerUser from "@/services/registerData";

export const TOKEN_KEY = "@taugor-token";
export const USER_KEY = "@taugor-user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//dados não registrados no banco
export const isRegistered = () => localStorage.getItem(USER_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const setUser = user => {
  localStorage.setItem(USER_KEY, user);
  registerUser();
  removeUser();
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};