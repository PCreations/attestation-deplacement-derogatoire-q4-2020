export const localStorageWrapper = () => {
  if (localStorage.getItem === undefined) {
    return {
      setItem () {},
      getItem () {},
    }
  }
  return localStorage
}
