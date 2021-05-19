export const checkUrlAnchor = () => {
  if (typeof window !== 'undefined') {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
      // Code for localStorage/sessionStorage.
      if (!window.sessionStorage.hash) {
        window.sessionStorage.hash = hash;
      }
      console.log(`STORED ${window.sessionStorage.hash}`);
    }
  }
};

export const addUrlAnchor = () => {
  console.log(`Pre ${window.location.href}`);
  const { hash } = window.location;

  if (!hash) {
    if (typeof Storage !== 'undefined') {
      // Code for localStorage/sessionStorage.
      window.location.hash = window.sessionStorage.hash;
      console.log(`STORED ${window.sessionStorage.hash} ${window.location.href}`);
      window.sessionStorage.removeItem('hash');
      console.log(`DELETED ${window.sessionStorage.hash}`);
    }
  }
  // console.log(`Clieent ${}`)
};
