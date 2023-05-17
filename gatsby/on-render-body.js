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

  setPostBodyComponents([linkedInId, linkedInFunc, linkedInImg]);
};

export default onRenderBody;
