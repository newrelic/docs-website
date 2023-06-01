/* eslint-disable no-useless-escape */
// for VWO script linting errors

import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'He_vizRXYX_mUhwBe3BmyaMxNnVRAZbq_Jtm2A0e4WY',
  },
];

const visualWebsiteOptimizer = (location) => {
  const { pathname } = location;
  const vwoPaths = [
    /docs\/accounts\/accounts-billing\/account-setup\/create-your-new-relic-account/,
    /docs\/accounts\/accounts-billing\/new-relic-one-pricing-billing\/new-relic-one-pricing-billing/,
    /docs\/licenses\/license-information\/usage-plans\/new-relic-usage-plan/,
    /docs\/accounts\/accounts-billing\/new-relic-one-pricing-billing\/data-ingest-billing/,
    /docs\/accounts\/accounts-billing\/new-relic-one-user-management\/user-type/,
  ];
  const withVWO = vwoPaths.some((path) => path.test(pathname));

  if (withVWO || pathname === '/') {
    return (
      <script type="text/javascript" id="vwoCode">
        {`window._vwo_code=window._vwo_code || (function() {
        var account_id=680279,
        version = 1.5,
        settings_tolerance=2000,
        library_tolerance=2500,
        use_existing_jquery=false,
        is_spa=1,
        hide_element='body',
        hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
        /* DO NOT EDIT BELOW THIS LINE */
        f=false,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.innerText;t.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;window.settings_timer=setTimeout(function(){_vwo_code.finish()},settings_tolerance);var e=d.createElement('style'),t=hide_element?hide_element+'{'+hide_element_style+'}':'',i=d.getElementsByTagName('head')[0];e.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&e.setAttribute('nonce',vwoCodeEl.nonce);e.setAttribute('type','text/css');if(e.styleSheet)e.styleSheet.cssText=t;else e.appendChild(d.createTextNode(t));i.appendChild(e);var n=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(n?'&c='+n:''));return settings_timer}};window._vwo_settings_timer = code.init();return code;}());`}
      </script>
    );
  }
};

const isStyleGuidePage = (url) => {
  return url.includes('docs/style-guide');
};

const isAgileHandbookPage = (url) => {
  return url.includes('docs/agile-handbook');
};

const isExcludedFromSwiftype = (url) => {
  return isStyleGuidePage(url) || isAgileHandbookPage(url);
};

const DocsSiteSeo = ({
  location,
  title,
  description,
  type,
  tags,
  dataSource,
  disableSwiftype,
}) => (
  <SEO location={location} title={title}>
    {process.env.GATSBY_ENVIRONMENT === 'staging' && (
      <meta name="robots" content="noindex" />
    )}
    {disableSwiftype && <meta name="st:robots" content="nofollow, noindex" />}
    {METADATA.map((data) => (
      <meta key={data.name} {...data} />
    ))}

    {(tags || []).map((tag) => (
      <meta
        key={tag}
        name="tags"
        className="swiftype"
        data-type="string"
        content={tag}
      />
    ))}

    {type && (
      <meta
        className="swiftype"
        name="document_type"
        data-type="enum"
        content={type}
      />
    )}

    {title && (
      <meta
        className="swiftype"
        name="title"
        data-type="string"
        content={title}
      />
    )}

    {dataSource && (
      <meta
        className="swiftype"
        name="dataSource"
        data-type="string"
        content={dataSource}
      />
    )}

    {isExcludedFromSwiftype(location.pathname) && (
      <meta name="st:robots" content="noindex, nofollow" />
    )}

    {(description || title) && (
      <meta name="description" content={description || title} />
    )}

    {visualWebsiteOptimizer(location)}
  </SEO>
);

DocsSiteSeo.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  dataSource: PropTypes.string,
  tags: PropTypes.array,
  disableSwiftype: PropTypes.bool,
};

export default DocsSiteSeo;
