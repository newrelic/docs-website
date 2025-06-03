---
title: Java용 AWS Elastic Beanstalk 설치
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: Directions for installing the New Relic Java agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

[<DNT>AWS Elastic Beanstalk</DNT>](http://docs.amazonwebservices.com/elasticbeanstalk/latest/gsg/) 사용자인 경우, 저항 세력에 추가 설정이 필요합니다.

## 전제 조건

구성을 완료하기 전에 먼저 다음을 수행해야 합니다.

* 지원되는 [Amazon Web Services 계정](http://aws.amazon.com/elasticbeanstalk/) 을 만듭니다.
* [새 유물 계정](http://newrelic.com/signup) 을 만듭니다.
* [Java 에이전트를 다운로드하여 설치합니다](/docs/agents/java-agent/installation/java-agent-manual-installation) .

<DNT>AWS Elastic Beanstalk</DNT> 에서 안테나 에이전트 설치를 완료하려면 해당 플랫폼에 맞는 단계를 따르세요.

## 톰캣 플랫폼

구성요소의 경우, <DNT>AWS Elastic Beanstalk Tomcat</DNT> 플랫폼을 사용하여 배포합니다.

1. WAR 파일에서 `newrelic.jar` 및 `newrelic.yml` 파일을 `WEB-INF/lib/` 에 추가합니다.

2. 새 WAR 파일을 새 응용 프로그램 또는 이전 응용 프로그램에 대한 업데이트로 다시 패키징하고 배포합니다.

3. 기본 EC2 인스턴스를 찾아 연결합니다. 연결되면 이 명령을 사용하여 `newrelic.jar` 파일의 경로를 찾으십시오. 한 번에 하나의 디렉토리를 검색해야 합니다. `/var` 또는 `/usr` 를 적절하게 사용하십시오.

   ```sh
   sudo find /var -name "newrelic.jar"
   sudo find /usr -name "newrelic.jar"
   ```

   `-javaagent` 플래그를 JVM에 전달하려면 다음 안내를 따르세요.

4. AWS 콘솔에서 Elastic Beanstalk를 엽니다.

5. 해당 지역을 선택합니다.

6. 환경을 선택하세요.

7. 왼쪽 창에서 <DNT>**Configurations**</DNT> 선택합니다.

8. <DNT>**Updates, monitoring, and logging**</DNT> 으로 스크롤하고 오른쪽 상단에서 <DNT>**Edit**</DNT> 선택합니다.

9. <DNT>**Platform Software**</DNT> 으로 스크롤하고 <DNT>**JVM Options**</DNT> 필드에 다음 줄을 추가합니다.

   ```sh
   -javaagent:/full/path/to/newrelic.jar
   ```

10. 저장하려면 <DNT>**Apply**</DNT> 선택하세요.

그러면 <DNT>Elastic Beanstalk</DNT> 이 환경을 업데이트합니다.

## 자바 SE 플랫폼

구성요소의 경우, <DNT>AWS Elastic Beanstalk Java SE</DNT> 플랫폼을 사용하여 배포합니다.

1. `opt/newrelic` 라는 하위 디렉터리와 같은 프로젝트에 `newrelic.jar` 및 `newrelic.yml` 파일을 추가합니다.

2. Java SE 애플리케이션에서 사용자 정의 JVM 인수를 사용하려면 애플리케이션의 소스 번들 루트에 `Procfile` 를 포함하는 것이 좋습니다. 자세한 내용은 [Java SE 설명서를](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html) 참조하세요.

   `Procfile` 에서 `-javaagent` 플래그를 JVM 인수로 전달합니다.

   ```makefile
   web:java -javaagent:path/from/bundle/root/to/newrelic.jar -jar <your-application>.jar
   ```

3. 소스 번들을 다시 패키징하고 Elastic Beanstalk에 배포합니다.
