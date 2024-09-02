---
title: PHP용 AWS Elastic Beanstalk 설치
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: Directions for installing the New Relic PHP agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

AWS [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) 는 PHP 애플리케이션을 쉽게 배포하고 확장할 수 있는 동적 서비스입니다. 다음 지침에 따라 New Relic의 PHP 에이전트로 AWS를 설치하십시오.

<Callout variant="tip">
  New Relic과 함께 Amazon 도구를 사용하는 방법에 대한 자세한 내용은 [Amazon Web Services(AWS) 사용자](/docs/accounts-partnerships/partnerships/partner-based-installation/amazon-web-services-aws-users) 를 참조하십시오.
</Callout>

## 요구 사항

뉴렐릭의 PHP 에이전트를 설치하기 전에 지원되는 [Amazon Web Services 계정이](http://aws.amazon.com/elasticbeanstalk/ "링크가 새 창에서 열립니다.") 있는지 확인하세요. 또한, 뉴렐릭 설치를 위해서는 뉴렐릭 <InlinePopover type="licenseKey"/>이 필요합니다. 이는 귀하가 계정에 [가입할](http://newrelic.com/signup "링크가 새 창에서 열립니다.") 때 뉴렐릭이 제공하는 40자의 16진수 문자열입니다.

## 설치

AWS Elastic Beanstalk에 New Relic의 PHP 에이전트를 설치하려면:

1. Elastic BeanStalk 애플리케이션 내부의 `.ebextensions` 폴더에서 `newrelic.config` 이라는 새 파일을 만듭니다.

2. 파일에 다음 콘텐츠를 추가합니다.

   ```yml
   packages:
     yum:
       newrelic-php5: []
     rpm:
       newrelic: INSERT_LINK_TO_REPO
   commands:
     configure_new_relic:
       command: newrelic-install install
       env:
         NR_INSTALL_SILENT: true
         NR_INSTALL_KEY: INSERT_LICENSE_KEY
   ```

3. `INSERT_LINK_TO_REPO` 을 적절한 저장소 URL로 바꿉니다.

   * 32비트 시스템의 경우 다음을 사용하십시오. `http://yum.newrelic.com/pub/newrelic/el5/i386/newrelic-repo-5-3.noarch.rpm`
   * 64비트 시스템의 경우 다음을 사용하십시오. `http://yum.newrelic.com/pub/newrelic/el5/x86_64/newrelic-repo-5-3.noarch.rpm`

4. `INSERT_LICENSE_KEY` 뉴렐릭 <InlinePopover type="licenseKey"/>으로 바꾸세요.

5. Elastic BeanStalk에 앱 푸시:

   * 일반적으로 [`eb deploy`](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html) 을 사용합니다.
   * [Eb CLI 2.6](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli.html) 을 계속 사용하는 경우 필요한 경우 `git aws.push` 를 사용합니다.

성공적으로 설정한 후 인덱스가 뉴렐릭에 표시되기 시작하는 데 최대 15분이 걸릴 수 있습니다. [APM <DNT>**Summary**</DNT> 페이지를](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) 보려면: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select your app)**</DNT> 으)로 이동하세요.
