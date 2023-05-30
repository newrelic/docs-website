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

  const marketo = (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function() {
          var didInit = false;
          function initMunchkin() {
            if(didInit === false) {
              didInit = true;
              Munchkin.init('341-XKP-310');
            }
          }
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = '//munchkin.marketo.net/munchkin.js';
          s.onreadystatechange = function() {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
              initMunchkin();
            }
          };
          s.onload = initMunchkin;
          document.getElementsByTagName('head')[0].appendChild(s);
        })();`,
      }}
      type="text/javascript"
    ></script>
  );

  setPostBodyComponents([linkedInId, linkedInFunc, linkedInImg, marketo]);
};

export default onRenderBody;
