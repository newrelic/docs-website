export const onClientEntry = () => () => {
  if (typeof window !== 'undefined') {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    
    if (typeof Storage !== 'undefined') {
      // Code for localStorage/sessionStorage.
      if (hash) {
        console.log(`Hash value is: ${hash}`)
        window.sessionStorage.setItem('hash', hash);
        console.log(`STORED ${hash}`);
      }
    }
  }
};

export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
