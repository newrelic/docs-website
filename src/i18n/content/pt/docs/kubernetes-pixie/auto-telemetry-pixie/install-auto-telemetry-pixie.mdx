---
title: Instale a telemetria automática com Pixie
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: How to install Auto-telemetry with Pixie in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Para começar a usar a telemetria automática com Pixie, comece com nossa [instalação guiada](https://one.newrelic.com/marketplace?state=fc4edc3d-8214-a314-7432-3e62d7de43d7). A instalação guiada implantará a integração New Relic com Pixie em seu cluster. Você não precisa fazer nenhuma configuração ou instalação adicional para começar a usar o Pixie.

Se você deseja instalar a Auto-telemetria com Pixie em vários clusters, execute novamente a instalação guiada para cada cluster adicional.

## Pré-requisitos gerais para usar o Pixie [#general-prereqs]

Pronto para começar? Se você ainda não tem uma, [cadastre-se para uma conta New Relic](https://newrelic.com/signup). É grátis, para sempre!

Dicas antes de começar:

* Revise esta [visão geral da segurança de dados do Pixie](/docs/auto-telemetry-pixie/pixie-data-security-overview) para conhecer as ações a serem tomadas para proteger seus dados.
* Certifique-se de que seu cluster tenha memória suficiente. Pixie requer, no mínimo, 1Gib de memória em cada nó do seu cluster. Revise esta [visão geral do gerenciamento de memória do Pixie](/docs/auto-telemetry-pixie/manage-pixie-memory) para ver as ações a serem tomadas para ajustar o uso da memória.
* Certifique-se de que o Pixie seja executado em modo privilegiado.
* Revise os outros [requisitos técnicos do Pixie](https://docs.px.dev/installing-pixie/requirements/).

## As etapas de configuração dependem do status da sua conta [#general-setup]

Use a tabela a seguir para descobrir por onde começar a instalar a telemetria automática com Pixie. O local onde você inicia a instalação depende se você já possui uma conta New Relic ou Pixie, ou ambas.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        New Relic
      </th>

      <th>
        Duende
      </th>

      <th>
        Próximos passos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td>
        Inicie a instalação guiada no [início do processo](#install-beginning).
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td>
        Se você já possui os dois tipos de contas e usou o mesmo endereço de e-mail para cada uma delas, clique no ícone New Relic na interface do Pixie. Isso leva você à seção [Configurar o arquivo de comando/manifesto HELM (yaml)](#install-helm-command-manifest) da instalação guiada. Em seguida, siga as etapas.

        Se você estiver usando endereços de e-mail diferentes no Pixie e no New Relic, crie uma nova conta para o Pixie ou o New Relic para corresponder aos endereços de e-mail dos dois produtos. Você também pode entrar em contato com o suporte da New Relic para vincular manualmente sua conta New Relic existente à sua conta Pixie.
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td>
        Se você seguir um link para o New Relic na interface do Pixie e não tiver uma conta do New Relic, primeiro você deve criar uma. Clique no ícone New Relic na interface do Pixie e siga as etapas para criar uma conta New Relic. Ao fazer isso, sua conta Pixie será vinculada a ela. Em seguida, [continue o processo de instalação guiada](#install-helm-command-manifest).
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td>
        Cadastre-se para obter uma [conta gratuita da New Relic](https://www.newrelic.org/signup). Em seguida, inicie a instalação guiada no [início do processo](#install-beginning).
      </td>
    </tr>
  </tbody>
</table>

## Instalar usando o processo de instalação guiada [#install-beginning]

1. Abra nossa [instalação guiada de monitoramento do New Relic](https://one.newrelic.com/marketplace?state=fc4edc3d-8214-a314-7432-3e62d7de43d7).

2. Selecione a conta que deseja usar para a instalação guiada e clique em

   <DNT>
     **Continue**
   </DNT>

   . Observação: se você tiver uma única conta, não verá esta opção.

3. Preencha os campos restantes e clique em

   <DNT>
     **Continue**
   </DNT>

   para concluir o restante da instalação.

## Instalar a partir do arquivo de comando/manifesto HELM (yaml) [#install-helm-command-manifest]

Se você chegou ao processo de instalação guiada seguindo um link do Pixie ou do New Relic, suas etapas começam aqui.

1. Selecione a conta e o cluster para a instalação. Se necessário, selecione um namespace.

   <Callout variant="important">
     Atualmente, o Pixie tem melhor desempenho em clusters com até 100 nós. (Exceder 100 nós pode levar ao uso excessivo de memória e à falha na execução do script.) Lembrete amigável: o escalonamento automático pode aumentar rapidamente o número de nós.
   </Callout>

2. Clique em <DNT>**Continue**</DNT>.

3. Selecione os dados que deseja coletar, observar e depurar e clique em <DNT>**Continue**</DNT>.

4. Na página <DNT>**Choose install method**</DNT> , selecione <DNT>**Helm**</DNT> ou <DNT>**manifest**</DNT>.

   <CollapserGroup>
     <Collapser
       className="freq-link"
       id="helm-method"
       title="Método Helm"
     >
       Execute o comando Helm fornecido em sua linha de comando. Se você estiver preocupado com a quantidade de dados Pixie que irá ingerir, confira nossas [estratégias para reduzir a ingestão](/docs/auto-telemetry-pixie/manage-pixie-data).

       Helm instala um pacote contendo o agente New Relic Infrastructure , uma integração para reunir Prometheus métrica e evento Kubernetes , e a integração Pixie. A implantação leva alguns minutos para ser concluída. Para ver o status da instalação no cluster, execute `kubectl get pods -n newrelic`.

       Para obter informações gerais sobre como instalar uma integração do Kubernetes, consulte nossa documentação sobre [os requisitos de instalação do Helm](/docs/integrations/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#h2-compatibility-and-requirements).
     </Collapser>

     <Collapser
       className="freq-link"
       id="manifest-method"
       title="método manifesto"
     >
       Execute o comando fornecido em seu console e insira o caminho para o manifesto baixado. Se você estiver executando seu cluster do Kubernetes na nuvem, consulte as etapas adicionais na [documentação Kubernetes ](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/#cloud-platforms).
     </Collapser>
   </CollapserGroup>

5. Clique em <DNT>**Continue**</DNT> para abrir a página <DNT>**Listening for data**</DNT> .

6. Ao receber a mensagem <DNT>**See your data**</DNT>, clique em <DNT>**Kubernetes Cluster Explorer**</DNT> para ver seu cluster.

   A telemetria automática com Pixie pode reiniciar após a instalação. Isso é causado pelo recurso de atualização automática.

<InstallFeedback/>

## Se você vincular a conta Pixie e New Relic errada [#link-wrong-accounts]

Entre em contato com o suporte para desvincular uma conta Pixie da sua conta New Relic. Esteja ciente de que se você desvincular uma conta Pixie que foi criada automaticamente por meio da instalação guiada, você perderá o acesso a essa conta Pixie.

## Atualize a integração do Pixie [#upgrade]

Para determinar sua versão de integração do Pixie, consulte nossa [documentação de resolução de problemas do Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/troubleshooting/get-pixie-integration-version).

A integração Pixie é instalada como parte da integração Kubernetes da New Relic. Para atualizar a integração do Kubernetes, consulte nossa [documentação de instalação do Kubernetes](/install/kubernetes#update).

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  Após agosto de 2022, descontinuaremos o suporte para vários recursos, incluindo a versão 1 de nossa integração com o Pixie. Para obter mais detalhes, incluindo como você pode se preparar facilmente para essa transição, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/july-2022-end-of-life-announcements/188318).
</Callout>

## Desinstale a integração Pixie [#uninstall]

A integração Pixie é instalada como parte da integração Kubernetes do New Relic. Para desinstalar a integração do Kubernetes, consulte [Desinstalar a integração do Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/uninstall-kubernetes).
