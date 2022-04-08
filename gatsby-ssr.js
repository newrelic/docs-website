/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/   docs/ssr-apis/
 */
import React from 'react';

const addTwitterTag = [
    <script>
        !function(e,t,n,s,u,a)
        {e.twq ||
        ((s = e.twq = function () {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }),
            (s.version = '1.1'),
            (s.queue = []),
            (u = t.createElement(n)),
            (u.async = !0),
            (u.src = '//static.ads-twitter.com/uwt.js'),
            (a = t.getElementsByTagName(n)[0]),
            a.parentNode.insertBefore(u, a))}
        (window,document,'script'); // Insert Twitter Pixel ID and Standard Event
        data below twq('init','o73vi'); twq('track','PageView');
    </script>
]
  
exports.onRenderBody = ({
    setPostBodyComponents
}) => {
    setPostBodyComponents(addTwitterTag)
    }

//export { default as wrapPageElement } from './gatsby/wrap-page-element';
//export { default as setPostBody } from './gatsby/on-render-body-html';
