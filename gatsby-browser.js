export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
export const onClientEntry = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.oncliententry) {
        window.sessionStorage.oncliententry = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }

export const onInitialClientRender = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onInitialClientRender) {
        window.sessionStorage.onInitialClientRender = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
}

export const onPostPrefetchPathname = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onPostPrefetchPathname) {
        window.sessionStorage.onPostPrefetchPathname = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
export const onPreRouteUpdate = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onPreRouteUpdate) {
        window.sessionStorage.onPreRouteUpdate = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }

  
  export const onPrefetchPathname = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onPrefetchPathname) {
        window.sessionStorage.onPrefetchPathname = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }

  

  export const onRouteUpdateDelayed = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onRouteUpdateDelayed) {
        window.sessionStorage.onRouteUpdateDelayed = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }  }

  
  export const onServiceWorkerInstalled = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onServiceWorkerInstalled) {
        window.sessionStorage.onServiceWorkerInstalled = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
  
  export const onServiceWorkerRedundant = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onServiceWorkerRedundant) {
        window.sessionStorage.onServiceWorkerRedundant = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
  
  export const onServiceWorkerUpdateFound = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onServiceWorkerUpdateFound) {
        window.sessionStorage.onServiceWorkerUpdateFound = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
  
  export const onServiceWorkerUpdateReady = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onServiceWorkerUpdateReady) {
        window.sessionStorage.onServiceWorkerUpdateReady = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
  
  export const replaceComponentRenderer = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.replaceComponentRenderer) {
        window.sessionStorage.replaceComponentRenderer = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }
  export const replaceHydrateFunction = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.replaceHydrateFunction) {
        window.sessionStorage.replaceHydrateFunction = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  };

  export const shouldUpdateScroll = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.shouldUpdateScroll) {
        window.sessionStorage.shouldUpdateScroll = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }

 

  export const wrapRootElement = () => {
    const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.wrapRootElement) {
        window.sessionStorage.wrapRootElement = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
  }