import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';

export default async (request, context) => {
  const response = await context.next();
  const hasGdpr = new Set([
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
  ]).has(context.geo.country.code);

  if (hasGdpr) {
    return new HTMLRewriter()
      .on('script', {
        element(element) {
          const scriptSrc = element.getAttribute('src');
          if (
            typeof scriptSrc === 'string' &&
            scriptSrc.startsWith('https://cmp.osano.com/')
          ) {
            element.setAttribute(
              'src',
              scriptSrc.replace(/variant=one/gi, 'variant=two')
            );
          }
        },
      })
      .transform(response);
  }
};
