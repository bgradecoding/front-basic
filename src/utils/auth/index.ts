import LocalStorage from "utils/localStorage";

export const authTokenSaveToStorage = (tokenKey: string, token: string) => {
  LocalStorage.setItem(tokenKey, token);
};

export const authTokenRemoveInStorage = (tokenKey: string) => {
  LocalStorage.removeItem(tokenKey);
};
