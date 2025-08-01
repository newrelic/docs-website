// EDGE FUNCTION DISABLED - This function has been disabled in netlify.toml 
// The function was originally created to inject country codes for cookie consent
// but is not currently needed. Can be re-enabled if country-based functionality 
// is required in the future.

export default async (request, context) => {
  const response = await context.next();

  const contentType = response.headers.get("content-type");

  // Only modify HTML responses.
  // If it's not HTML, return the original response unmodified.
  if (!contentType || !contentType.includes("text/html")) {
    return response;
  }

  // Clone the response to be able to read its body.
  // A response body can only be read once.
  const clonedResponse = response.clone();
  let pageText = await clonedResponse.text();

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
  return new Response(pageText, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
