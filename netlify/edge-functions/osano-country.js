import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';

export default async (request, context) => {
  const response = await context.next();
  const hasGdpr = [
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
  ].includes(context.geo.country.code);

  if (hasGdpr) {
    return (
      new HTMLRewriter()
        // .on('script', {
        //   text(text) {
        //     buffer += text.text;

        //     if (text.lastInTextNode) {
        //       text.replace(buffer.replace(/variant=one/gi, 'variant=two'));
        //       buffer = '';
        //     } else {
        //       text.remove();
        //     }
        //   },
        // })
        .on('script', {
          element(element) {
            const scriptSrc = element.getAttribute('src');
            if (
              typeof scriptSrc === 'string' &&
              scriptSrc.includes('cmp.osano.com/')
            ) {
              element.setAttribute(
                'src',
                scriptSrc.replace(/variant=one/gi, 'variant=two')
              );
            }
          },
        })
        .transform(response)
    );
  }
};
