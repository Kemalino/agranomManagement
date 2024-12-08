import Cookies from 'js-cookie';
export const cookieGetter = (name: string) => {
  return Cookies.get(name);
};

export const cookieSetter = (name: string, value: string, expireTime = 1) => {
  Cookies.set(name, value, { expires: expireTime });
};

export const cookieRemover = (name: string) => {
  Cookies.remove(name);
};

export const backendUrl = `${import.meta.env.VITE_BACKEND_PROTOCOL}://${
  import.meta.env.VITE_BACKEND_HOSTNAME
}:${import.meta.env.VITE_BACKEND_PORT}`;
