---
title: 'Laboratório parte 3: erros de depuração em seu aplicativo'
metaDescription: 'Part 3 of a multi-part lab on using New Relic browser monitoring to troubleshoot your site: Debug errors in your application'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="course"
  title="laboratório"
>
  Este procedimento faz parte de um laboratório que ensina como solucionar problemas do seu aplicativo da web com o New Relic Browser.

  Cada procedimento no laboratório é baseado no anterior, portanto, certifique-se de ter concluído o último procedimento, [_instrumentar seu aplicativo com nosso agente browser_](/docs/browser/new-relic-browser/lab/install-browser-agent/), antes de iniciar este.
</Callout>

Até agora, seu aplicativo funcionou bem. usuário conseguiu fazer seus pedidos e ficou satisfeito com seu atendimento. Mas agora que você tem alguns insights sobre seu aplicativo, você percebe que ele está mostrando alguns erros de JavaScript.

<img
  title="JavaScript errors in relicstaurants"
  alt="JavaScript errors in relicstaurants"
  src="/images/browser-lab-screenshot-relicstaurants-browser-errors.webp"
/>

Neste procedimento, você usa New Relic Browser para descobrir o que está causando esses erros e depurar seu aplicativo em tempo hábil.

<Callout variant="important">
  Para ver seus dados no New Relic, você precisa ativar <InlinePopover type="browser"/>para este procedimento.

  Se ainda não o fez, [instrumente seu aplicativo com nosso agente browser](/docs/browser/new-relic-browser/lab/install-browser-agent).
</Callout>

## Depurar erros de front-end

A má notícia é que você confirmou que há alguns erros no seu aplicativo. A boa notícia é que recentemente você instrumentou sua aplicação com nosso agente browser! Vá para New Relic e faça login em sua conta, caso ainda não o tenha feito.

<Steps>
  <Step>
    Na página inicial do New Relic, navegue até <DNT>**Browser**</DNT> e escolha seu aplicativo <DNT>**Relicstaurants**</DNT> .

    <img
      title="view relicstraunts"
      alt="view relicstaruants"
      src="/images/browser-lab-screenshot-view-relicstaurants.webp"
    />
  </Step>

  <Step>
    Aqui você vê todos os dados relacionados ao seu aplicativo de browser, incluindo <DNT>**Page views with JavaScript errors**</DNT>, <DNT>**Core web vitals**</DNT>, <DNT>**User time on the site**</DNT>, <DNT>**Initial page load and route changes**</DNT> e outros.

    <img
      title="Relicstaurants summary"
      alt="Relicstaurants summary"
      src="/images/browser-lab-screenshot-relicstaurants-browser-app.webp"
    />
  </Step>

  <Callout variant="tip">
    Não está vendo seus dados? Certifique-se de ativar o monitoramento do browser e de que seu gerador de carga esteja funcionando.
  </Callout>

  <Step>
    Observe <DNT>**Page views with javascript errors**</DNT>.

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-page-with-js-errors.webp"
    />

    Aqui, você vê picos mostrando que seu aplicativo tem alguns erros de Javascript.
  </Step>

  <Step>
    Clique em <DNT>**Page views with javascript errors**</DNT>.

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-navigate-to-js-errors.webp"
    />

    Isso leva você à página <DNT>**JS errors**</DNT> , onde você vê todos os erros JS junto com a instância de erro total.

    <img
      title="javascript errors"
      alt="javascript errors"
      src="/images/browser-lab-screenshot-js-errors.webp"
    />
  </Step>

  <Step>
    Clique no erro <DNT>**Cart cannot be empty**</DNT> para obter detalhes.

    <img
      title="cart error"
      alt="cart error"
      src="/images/browser-lab-screenshot-cart-error.webp"
    />

    Aqui você vê <DNT>**errorMessage**</DNT>, <DNT>**INSTANCES**</DNT>, <DNT>**INTERACTIONS AFFECTED**</DNT> e outros detalhes relacionados ao seu erro.

    <img
      title="cart error details"
      alt="cart error details"
      src="/images/browser-lab-screenshot-cart-error-details.webp"
    />
  </Step>

  <Step>
    Em seguida, navegue até a guia <DNT>**Error Instances**</DNT> .

    <img
      title="error instances"
      alt="error instances"
      src="/images/browser-lab-screenshot-error-instances.webp"
    />

    ![imagem mostrando instância de erro](../../../images/nr-browser/error-instances.webp)

    Aqui você vê mais detalhes relacionados ao seu erro específico, incluindo <DNT>**Event Log**</DNT>, <DNT>**Stack trace**</DNT> e outros.
  </Step>

  <Step>
    Role para baixo na página <DNT>**Error Instances**</DNT> para visualizar o <DNT>**Stack trace**</DNT>.

    <img
      title="stack trace"
      alt="stack trace"
      src="/images/browser-lab-screenshot-stack-trace.webp"
    />

    Aqui, você vê o stack trace do seu erro.
  </Step>
</Steps>

Observando os detalhes do erro acima, agora você conhece o erro específico que afeta seus serviços. No entanto, o stack trace mostrado aqui é reduzido e é difícil entender o que está causando esse erro. Para entender isso, precisamos fazer upload do mapa de origem para minimizar o erro.

## Carregue o mapa de origem para desminificar o erro JS

JavaScript minificado resulta principalmente em rastreamento de pilha inútil e difícil de entender na página de erros do browser. O upload de mapas de origem converte esses erros em rastreamento de pilha compreensível. Ele também fornece uma referência útil para linhas de código e facilita a depuração. Você pode fazer upload do seu mapa de fontes para o New Relic via interface, API ou módulo npm.

Aqui, usamos a interface New Relic para fazer upload do mapa de origem e eliminar o erro JS.

<Steps>
  <Step>
    Na página de erros JS, navegue até o stack trace do erro e expanda-o.

    <img
      title="Expand stack trace"
      alt="Expand stack trace"
      src="/images/browser-lab-screenshot-expand-stack-trace.webp"
    />

    Aqui, você vê uma opção para fazer upload do mapa de origem.
  </Step>

  <Step>
    Clique em <DNT>**find file**</DNT>.

    <img
      title="image showing find file option to upload source map"
      alt="image showing find file option to upload source map"
      src="/images/browser-lab-screenshot-find-file.webp"
    />

    Isso abre uma janela do explorador de arquivos para você fazer upload do mapa de origem do seu armazenamento local. Encontre e carregue seu mapa de origem no diretório _build/static/js_ do seu projeto.

    <Callout variant="tip">
      Os arquivos de mapa de origem têm uma extensão de arquivo `.js.map`. Relicstaurants está configurado para gerar mapas de origem e você os encontra no diretório _build/static/js_ . Se você estiver tendo problemas para gerar mapas de origem para o seu projeto, siga [nossa documentação](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors#generate-maps) para saber como gerar um.
    </Callout>
  </Step>

  <Step>
    Depois que seu mapa de origem for carregado com sucesso, você verá seu erro não minimizado.

    <img
      title="unminified stack trace"
      alt="unminified stack trace"
      src="/images/browser-lab-screenshot-un-minified.webp"
    />

    Aqui você vê o arquivo específico e a linha de código que está gerando esse erro. Observe que na linha 119, o <DNT>**Cart cannot be empty!**</DNT> está associado ao evento <DNT>**onClick**</DNT> no arquivo _componentes/layouts/app/app-contêiner/header/app-contêiner-header.js_ e também está acionando um alerta para o usuário. Vamos dar uma olhada neste arquivo!
  </Step>

  <Step>
    Abra o aplicativo no IDE de sua preferência e navegue até o arquivo _src/components/layouts/app/app-container/header/app-container-header.js_ . Dê uma olhada mais de perto no código mostrado.

    ```js fileName=src/components/layouts/app/app-container/header/app-container-header.js  lineHighlight=113-130
    import { Button, Drawer, Table } from 'antd';
    import Text from 'antd/lib/typography/Text';
    import { orderList } from 'atoms/order-list.atom';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useRecoilState } from 'recoil';
    import { Logo, StyledHeader } from './app-header-styled';
    import Navi from './navi-items';
    import { useNavigate } from 'react-router';

    const Header = () => {
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
      const [orderListState, setOrderList] = useRecoilState(orderList);
      const navigate = useNavigate();

      const onClose = () => {
        setIsSidebarVisible(false);
      };
      const handleSidebarOpen = () => {
        setIsSidebarVisible(true);
      };

      const itemQuantity = (list) => {
        let totalItemQuantity = 0;
        list.forEach((item) => (totalItemQuantity += item.count));

        return totalItemQuantity;
      };

      const handleDeleteItem = (clickedRow) => {
        const reducedData = orderListState.filter((item) =>
          item.name === clickedRow.name ? false : true
        );
        setOrderList(reducedData);
      };

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Count',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Delete',
          render: (clickedRow) => (
            <Button onClick={() => handleDeleteItem(clickedRow)}>-</Button>
          ),
        },
      ];

      return (
        <StyledHeader>
          <Link to="/">
            <Logo>
              <div>Relicstaurants</div>
              <p>by New Relic</p>
            </Logo>
          </Link>
          <Navi
            sidebarVisible={handleSidebarOpen}
            orderListLength={itemQuantity(orderListState)}
          />
          <Drawer
            size="large"
            title="Cart"
            placement="right"
            onClose={onClose}
            visible={isSidebarVisible}
          >
            <Table
              dataSource={orderListState}
              columns={columns}
              pagination={false}
              summary={(pageData) => {
                let totalPrice = 0;

                pageData.forEach(
                  ({ price, count }) => (totalPrice += price * count)
                );

                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Text type="danger">{totalPrice.toFixed(2)}</Text>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                    <Table.Summary.Row>
                      <Table.Summary.Cell colSpan={3}>
                        <Button
                          disabled={totalPrice > 0 ? false : true}
                          primary
                          onClick={() => {
                            setOrderList([]);
                            setIsSidebarVisible(false);
                          }}
                        >
                          Clear Cart
                        </Button>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Button 
                          id="pay" 
                          primary 
                          onClick={() => { 
                            if (!(totalPrice > 0)) { 
                              var err = new Error('Cart cannot be empty!'); 
                              newrelic.noticeError(err);  
                              alert(err) 
                              navigate('/') 
                              setIsSidebarVisible(false); 
                            } else { 
                            navigate(`/payment`, { state: totalPrice }); 
                            setIsSidebarVisible(false); 
                            } 
                          }} 
                        > 
                          PAY 
                        </Button> 
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </Drawer>
        </StyledHeader>
      );
    };

    export default Header;
    ```

    Aqui, observe que o erro <DNT>**Cart cannot be empty!**</DNT> só ocorre sempre que o usuário tenta acidentalmente finalizar a compra com o carrinho vazio. A função é codificada para alertar o usuário final de que ele não pode finalizar a compra com o carrinho vazio. Agora você sabe que esse erro não afetará seus serviços. No entanto, existem maneiras melhores de lidar com esse caso extremo e evitar o erro.
  </Step>

  <Step>
    Pressione `Ctrl+C` no terminal que está executando seu aplicativo para interromper a veiculação dele. Atualize _src/components/layouts/app/app-container/header/app-container-header.js_ da seguinte maneira.

    ```js fileName=src/components/layouts/app/app-container/header/app-container-header.js  lineHighlight=4,81-134
    import { Button, Drawer, Table } from 'antd';
    import Text from 'antd/lib/typography/Text';
    import { orderList } from 'atoms/order-list.atom';
    import { Message } from 'components/common';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useRecoilState } from 'recoil';
    import { Logo, StyledHeader } from './app-header-styled';
    import Navi from './navi-items';
    import { useNavigate } from 'react-router';

    const Header = () => {
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
      const [orderListState, setOrderList] = useRecoilState(orderList);
      const navigate = useNavigate();

      const onClose = () => {
        setIsSidebarVisible(false);
      };
      const handleSidebarOpen = () => {
        setIsSidebarVisible(true);
      };

      const itemQuantity = (list) => {
        let totalItemQuantity = 0;
        list.forEach((item) => (totalItemQuantity += item.count));

        return totalItemQuantity;
      };

      const handleDeleteItem = (clickedRow) => {
        const reducedData = orderListState.filter((item) =>
          item.name === clickedRow.name ? false : true
        );
        setOrderList(reducedData);
      };

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Count',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Delete',
          render: (clickedRow) => (
            <Button onClick={() => handleDeleteItem(clickedRow)}>-</Button>
          ),
        },
      ];

      return (
        <StyledHeader>
          <Link to="/">
            <Logo>
              <div>Relicstaurants</div>
              <p>by New Relic</p>
            </Logo>
          </Link>
          <Navi
            sidebarVisible={handleSidebarOpen}
            orderListLength={itemQuantity(orderListState)}
          />
          <Drawer
            size="large"
            title="Cart"
            placement="right"
            onClose={onClose}
            visible={isSidebarVisible}
          >
            {orderListState.length > 0 ? (
              <Table
                dataSource={orderListState}
                columns={columns}
                pagination={false}
                summary={(pageData) => {
                  let totalPrice = 0;

                  pageData.forEach(
                    ({ price, count }) => (totalPrice += price * count)
                  );

                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text type="danger">{totalPrice.toFixed(2)}</Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={3}>
                          <Button
                            disabled={totalPrice > 0 ? false : true}
                            primary
                            onClick={() => {
                              setOrderList([]);
                              setIsSidebarVisible(false);
                            }}
                          >
                            Clear Cart
                          </Button>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Button
                            id="pay"
                            disabled={totalPrice > 0 ? false : true}
                            primary
                            onClick={() => {
                              navigate(`/payment`, { state: totalPrice });
                              setIsSidebarVisible(false);
                            }}
                          >
                            PAY
                          </Button>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
                  );
                }}
              />
            ) : (
              <Message>Nothing in cart</Message>
            )}
          </Drawer>
        </StyledHeader>
      );
    };

    export default Header;
    ```
  </Step>
</Steps>

Aqui, você modificou o arquivo para mostrar uma mensagem <DNT>**Nothing in cart**</DNT> em vez de um erro quando o carrinho está vazio. O botão <DNT>**PAY**</DNT> permanece desabilitado até que o usuário final tenha itens em seu carrinho.

## Reinicie seu aplicativo

Agora que você corrigiu seu aplicativo, é hora de reiniciar o servidor local.

```bash
npm run build
npm run newstart
```

Reinicie seu gerador de carga também.

```bash
python3 simulator.py
```

<Callout variant="important">
  Certifique-se de executar esses comandos nas janelas de terminal corretas. Se você não tiver mais essas janelas, siga as etapas do [procedimento de configuração](/docs/browser/new-relic-browser/lab/set-up-env).
</Callout>

Assim que o gerador de carga começar a enviar dados para o New Relic, observe que o aplicativo não está mais relatando erros de JavaScript.

<img
  title="No errors"
  alt="No errors"
  src="/images/browser-lab-screenshot-no-errors.webp"
/>

## Resumo

Para recapitular, você observou um erro em seu aplicativo e usou New Relic Browser para:

1. Revise a porcentagem de erro
2. Analise os erros de JS no seu aplicativo
3. Entenda a instância do erro
4. Depure o erro JS fazendo upload do mapa de origem

<Callout
  variant="course"
  title="laboratório"
>
  Este procedimento faz parte de um laboratório que ensina como solucionar problemas do seu aplicativo da web com o New Relic Browser. A seguir, tente [depurar a lentidão do frontend em seu aplicativo](/docs/browser/new-relic-browser/lab/debug-slowness/).
</Callout>
