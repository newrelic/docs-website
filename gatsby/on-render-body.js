const onRenderBody = async ({ setPostBodyComponents }) => {
  const linkedInId = (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `_linkedin_partner_id = "7273"; window._linkedin_data_partner_ids =
      window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
      }}
    />
  );

  const linkedInFunc = (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function (l) {
          if (!l) {
            window.lintrk = function (a, b) {
              window.lintrk.q.push([a, b]);
            };
            window.lintrk.q = [];
          }
          var s = document.getElementsByTagName('script')[0];
          var b = document.createElement('script');
          b.type = 'text/javascript';
          b.async = true;
          b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
          s.parentNode.insertBefore(b, s);
        })(window.lintrk)`,
      }}
    />
  );

  const linkedInImg = (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7273&fmt=gif"
          />`,
      }}
    />
  );

  const twitterSnippet = (
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(e,t,n,s,u,a){e.twq || ((s = e.twq = function () {
      s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
    }),
    (s.version = '1.1'),
    (s.queue = []),
    (u = t.createElement(n)),
    (u.async = !0),
    (u.src = '//static.ads-twitter.com/uwt.js'),
    (a = t.getElementsByTagName(n)[0]),
    a.parentNode.insertBefore(u, a))}(window,document,'script');
  twq('init','o73vi'); 
  twq('track','PageView');`,
      }}
    />
  );

  setPostBodyComponents([
    linkedInId,
    linkedInFunc,
    linkedInImg,
    twitterSnippet,
  ]);
};

export default onRenderBody;
