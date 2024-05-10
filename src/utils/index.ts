import { TOKEN_KEY, USER_KEY } from "./constants";
import { FullUser } from "./types";

export const pxToRem = (value: number) => `${value / 16}rem`;

export const saveUser = (user: FullUser) => {
  if (typeof window !== "undefined")
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getSavedUser = (): FullUser | null => {
  if (typeof window !== "undefined") {
    const user = window.localStorage.getItem(USER_KEY);
    return user ? (JSON.parse(user) as FullUser) : null;
  } else {
    return getSavedUser();
  }
};

export const saveToken = (token: string) => {
  if (typeof window !== "undefined")
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem(TOKEN_KEY);
    return token;
  } else {
    return getToken();
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") window.localStorage.removeItem(TOKEN_KEY);
};

export const fetchLocalUsers = async () => {
  const result = (await import("./mockUsers.json")).result;
  return result as FullUser[];
};
