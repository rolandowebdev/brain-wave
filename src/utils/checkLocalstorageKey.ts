export const isLocalStorageKeyExist = (key: string): boolean => {
  return localStorage.getItem(key) !== null
}
