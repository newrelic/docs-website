---
title: global_settings (API do agente Python)
type: apiDoc
shortDescription: Esta chamada retorna uma referência ao objeto de configurações globais do agente Python.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call returns a reference to the agent''s global settings object.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.global_settings()
```

Esta chamada retorna uma referência ao objeto de configurações globais do agente Python.

## Descrição

Essa chamada retorna uma referência ao objeto de configurações globais do agente, que você pode usar para fazer alterações nas configurações disponíveis. O objeto de configurações retornado contém objetos hierárquicos aninhados. Os nomes das configurações correspondem aos nomes das configurações globais no [arquivo de configuração do agente](/docs/agents/python-agent/installation-and-configuration/python-agent-configuration).

O objeto `global_settings` contém configurações do arquivo de configuração e variáveis de ambiente; o objeto [`application_settings`](/docs/agents/python-agent/python-agent-api/application_settings) contém alterações de configuração adicionais da [configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc).

Se você atualizar as configurações globais usando o objeto de configurações globais, as alterações só terão efeito na próxima vez que o agente Python for registrado no [coletor](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) para esse aplicativo específico.

Se acessadas antes da inicialização do agente, as configurações globais terão as configurações padrão, juntamente com quaisquer substituições das variáveis de ambiente do usuário. Se acessadas após a inicialização do agente, as configurações globais conterão quaisquer configurações do arquivo de configuração do agente que também sejam configurações globais (porque o arquivo de configuração contém menos configurações que o objeto de configurações globais).

## Valores de retorno

Retorna uma referência ao objeto de configurações globais do agente.

## Exemplos

### Atribuir várias configurações [#some-settings]

Aqui estão alguns exemplos de atribuição das configurações `proxy_host`, `proxy_port`, `slow_sql.enabled` e `browser_monitoring.auto_instrument` :

```py
settings = newrelic.agent.global_settings()

settings.proxy_host = 'proxy.intranet' 
settings.proxy_port = 8888
settings.slow_sql.enabled = False
settings.browser_monitoring.auto_instrument = False
```

### Passando configurações para um dict [#dict]

Se você estiver depurando ou registrando e precisar das configurações globais como um objeto de dicionário Python tradicional, poderá passar o resultado para um dict. Aqui está um exemplo:

```py
settings_dict = dict(newrelic.agent.global_settings())

for name, value in settings_dict.items():
    print name, value
```

Cada `name` será o caminho pontilhado completo para essa configuração.
