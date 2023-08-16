export const breakOutLogin = () => {
  console.log("window.history.replaceState跳转到登陆！");
};

export const getToken = () => {
  return getStorage("token");
};

//存取localstorage
export const setStorage = (key: string, value: any) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
  console.log(`${key}:${value}存储成功`);
};
export const getStorage = (key: string) => {
  let value = localStorage.getItem(key);
  if (typeof value === "object" && value !== null) {
    return JSON.parse(value);
  }
  return value;
};
