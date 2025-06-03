---
title: Sem problemas de permissão de dados e chaves de registro
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data and you see permissions errors for registry keys, follow these troubleshooting procedures.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de gerar tráfego para seu aplicativo .NET e esperar cinco minutos, os dados ainda não aparecem na interface do New Relic.

## Solução

<Callout variant="important">
  Verifique com o administrador do sistema antes de alterar as permissões.
</Callout>

1. Certifique-se de que a identidade do pool de aplicativos tenha `read` acesso à chave de registro do New Relic localizada em:

   ```
   HKLM\SOFTWARE\New Relic\.NET Agent\
   ```

2. Conceda a todos os usuários no sistema acesso a essa chave de registro ou permita que apenas a identidade do pool de aplicativos acesse a chave.

   <CollapserGroup>
     <Collapser
       id="grant-everyone"
       title="Para conceder ao usuário Todos acesso à chave de registro:"
     >
       1. Como administrador, abra o registro do Windows.

       2. Selecione

          <DNT>
            **Computer > HKEY_LOCAL_MACHINE > Software > New Relic**
          </DNT>

          . Clique com o botão direito

          <DNT>
            **.NET Agent**
          </DNT>

          e selecione

          <DNT>
            **Permissions**
          </DNT>

          .

       3. Se você não encontrar um usuário

          <DNT>
            **Everyone**
          </DNT>

          na lista

          <DNT>
            **Group or user names**
          </DNT>

          , crie o usuário: Selecione

          <DNT>
            **Add**
          </DNT>

          . Então, a partir de

          <DNT>
            **Select Users or Groups**
          </DNT>

          : No campo

          <DNT>
            **Enter the object name to select**
          </DNT>

          , digite `Everyone`. Selecione

          <DNT>
            **OK**
          </DNT>

          .

       4. Na lista

          <DNT>
            **Group or user names**
          </DNT>

          , selecione

          <DNT>
            **Everyone**
          </DNT>

          . Em seguida, na tabela

          <DNT>
            **Permissions for**
          </DNT>

          , marque a caixa de seleção

          <DNT>
            **Allow**
          </DNT>

          para permissões

          <DNT>
            **Read**
          </DNT>

          .
     </Collapser>

     <Collapser
       id="grant-app-pool"
       title="Para conceder às identidades individuais do pool de aplicativos acesso à chave do registro:"
     >
       1. Determine a identidade do pool de aplicativos, que usa este formato padrão:

          ```
          IIS AppPool\APP_POOL_NAME
          ```

       2. Como administrador, abra o registro do Windows.

       3. Selecione <DNT>**Computer > HKEY_LOCAL_MACHINE > Software > New Relic**</DNT>. Clique com o botão direito <DNT>**.NET Agent**</DNT> e selecione <DNT>**Permissions**</DNT>.

       4. Na caixa de diálogo <DNT>**Permissions for .NET Agent**</DNT> , selecione <DNT>**Add**</DNT>. Em seguida, a partir de <DNT>**Select Users or Groups**</DNT>: no campo <DNT>**Enter the object name to select**</DNT> , digite a identidade do pool de aplicativos (por exemplo, `IIS AppPool\APP_POOL_NAME`). Selecione <DNT>**OK**</DNT>.

       5. Na lista <DNT>**Group or user names**</DNT> , selecione sua nova identidade do pool de aplicativos. Em seguida, na tabela <DNT>**Permissions for**</DNT> , marque a caixa de seleção <DNT>**Allow**</DNT> para permissões <DNT>**Read**</DNT> .
     </Collapser>
   </CollapserGroup>

3. Na linha de comando, execute um <DNT>**IISRESET**</DNT>.

4. Se a atualização das permissões não resolver o problema, siga os procedimentos de resolução de problemas do agente .NET para [dados ausentes](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

<Callout variant="tip">
  Para evitar que esse problema aconteça em instalações futuras, desinstale o WSM 3.3.5.0. Se você não quiser fazer alterações em seu registro, desinstale o WSM e o .NET e reinstale as versões mais recentes.
</Callout>

## Causa

Um motivo comum pelo qual os dados não aparecem é porque o agente .NET da New Relic não consegue acessar suas chaves de registro. Você pode ver erros de permissão de registro no log do profiler em:

```
%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs\
```

Por exemplo, você pode ver:

```
[Info] ... Logger initialized
[Error] ... Unable to find New Relic Home directory in registry or environment.
[Error] ... An exception was thrown while initializing the profiler.
```
