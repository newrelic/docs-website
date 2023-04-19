export const isNavClosed = () => {
  if (window.localStorage) {
    const localStorageNavState = localStorage.getItem('nav_closed');
    if (localStorageNavState === 'true' || localStorageNavState === 'false') {
      return JSON.parse(localStorageNavState);
    }
  }
  return null;
};

export const setNavClosed = (navState) => {
  if (navState !== null) {
    localStorage.setItem('nav_closed', navState);
  }
};
