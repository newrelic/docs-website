// export default () => {
//     console.log('hello logg')
    
//     return new Response("Hello world and oter");

// }


export default async (request, context) => {
// console.log('new log start')
// console.log('new log start2')
  // Fetch the original response from the origin server (your Gatsby site)
  // or the next function in the chain.
//   console.log('request is: ', request)
//   console.log('context is: ', context)

  const response = await context.next();

//   console.log('new log 3')
//   console.log('response is: ', response)

  // Get the content type of the response.
  const contentType = response.headers.get("content-type");

//   console.log('new log 4')
//   console.log('contentType is: ', contentType)

  // Only modify HTML responses.
  // If it's not HTML, return the original response unmodified.
  if (!contentType || !contentType.includes("text/html")) {
    return response;
  }

//   console.log('after contentType')
//   console.log('contentType is: ', contentType)

  // Clone the response to be able to read its body.
  // A response body can only be read once.
  const clonedResponse = response.clone();
  let pageText = await clonedResponse.text();

  
  console.log('pageText is: ', pageText)

  // Get the country code from the Netlify geolocation context.
  // Default to "UNKNOWN" if not available.
  const countryCode = context.geo?.country?.code || "UNKNOWN";

  // Prepare the script to inject. This makes the country code available on the client-side.
  const scriptToInject = `<script>window.userCountry = "${countryCode}";</script>`;

  // Inject the script right before the closing </head> tag for early availability.
  // This is generally the best place for such scripts.
  if (pageText.includes("</head>")) {
    pageText = pageText.replace("</head>", `${scriptToInject}</head>`);
  } else if (pageText.includes("</body>")) {
    // Fallback: if </head> is not found, try injecting before </body>.
    // This is less ideal for early availability but better than not injecting.
    pageText = pageText.replace("</body>", `${scriptToInject}</body>`);
  }
  // If neither </head> nor </body> is found, the script won't be injected.
  // This might happen for malformed HTML or non-standard page structures.

  // Return a new response with the modified HTML content.
  // It's important to preserve the original status, statusText, and headers.
  console.log('new log end')
  return new Response(pageText, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};