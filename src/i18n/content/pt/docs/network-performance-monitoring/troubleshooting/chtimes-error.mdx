---
title: 'O contêiner está em execução, mas o trabalho de descoberta não começa'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: The container is running but discovery job will not begin
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você executou `docker run`, mas nada parece estar acontecendo e você vê, no log Docker, um erro como

```bash
[Error] KTranslate Discovery SNMP Error: There was an error when writing the /snmp-base.yaml SNMP configuration file: chtimes /snmp-base.yaml: operation not permitted.
```

Isso acontece quando o arquivo `snmp-base.yaml` tem uma permissão de propriedade que impede o usuário Docker de editar o arquivo, geralmente porque você criou o arquivo como o usuário `root` ou uma conta privilegiada semelhante. O contêiner Docker é executado com um usuário sem privilégios que não pode modificar este arquivo. Dentro do contêiner, `ktranslate` está sempre tentando usar o ID de usuário 1000 e o ID de grupo 1000, portanto, a propriedade precisa permitir que esses IDs sejam proprietários do arquivo.

## Solução [#solution]

Na sua conta privilegiada, altere a propriedade do arquivo antes de passá-lo para o Docker contêiner. Por exemplo, execute:

```bash
chown 1000:1000 snmp-base.yaml
```
