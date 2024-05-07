export const isNavClosed = () => {
  if (typeof window !== 'undefined') {
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
