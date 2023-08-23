export const breakOutLogin = () => {
  console.log("window.history.replaceState跳转到登陆！");
};

export const getToken = () => {
  return getStorage("token");
};

//存取删除localstorage
export const setStorage = (key: string, value: any) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
  // console.log(`${key}:${value}存储成功`);
};
export const getStorage = (key: string) => {
  let value: any = localStorage.getItem(key);
  let newValue = JSON.parse(value);
  return newValue;
};
export const removeStorage = () => {
  let needRemoveList = ["token", "userInfo", "micro_List"];
  needRemoveList.forEach((item) => {
    localStorage.removeItem(item);
  });
};
