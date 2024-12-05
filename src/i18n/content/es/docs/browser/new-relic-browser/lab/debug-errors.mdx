---
title: 'Parte de laboratorio 3: depurar errores en su aplicación'
metaDescription: 'Part 3 of a multi-part lab on using New Relic browser monitoring to troubleshoot your site: Debug errors in your application'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="course"
  title="laboratorio"
>
  Este procedimiento es parte de un laboratorio que le enseña cómo solucionar problemas de su aplicación web con New Relic Browser.

  Cada procedimiento en el laboratorio se basa en el anterior, así que asegúrese de haber completado el último procedimiento, [_instrumentado su aplicación con nuestro agente del navegador_](/docs/browser/new-relic-browser/lab/install-browser-agent/), antes de comenzar este.
</Callout>

Hasta ahora, su aplicación ha funcionado bien. El usuario pudo realizar sus pedidos y quedó satisfecho con su servicio. Pero ahora que tiene información valiosa en su aplicación, observa que muestra algunos errores de JavaScript.

<img
  title="JavaScript errors in relicstaurants"
  alt="JavaScript errors in relicstaurants"
  src="/images/browser-lab-screenshot-relicstaurants-browser-errors.webp"
/>

En este procedimiento, utiliza New Relic Browser para descubrir qué está causando estos errores y depurar su aplicación oportunamente.

<Callout variant="important">
  Para ver sus datos en New Relic, debe habilitar <InlinePopover type="browser"/>para este procedimiento.

  Si aún no lo has hecho, [instrumenta tu aplicación con nuestro agente del navegador](/docs/browser/new-relic-browser/lab/install-browser-agent).
</Callout>

## Depurar errores de interfaz

La mala noticia es que ha confirmado que hay algunos errores en su aplicación. ¡La buena noticia es que recientemente instrumentaste tu aplicación con nuestro agente del navegador! Vaya a New Relic e inicie sesión en su cuenta, si aún no lo ha hecho.

<Steps>
  <Step>
    Desde la página de inicio de New Relic, navegue hasta <DNT>**Browser**</DNT> y elija su aplicación <DNT>**Relicstaurants**</DNT> .

    <img
      title="view relicstraunts"
      alt="view relicstaruants"
      src="/images/browser-lab-screenshot-view-relicstaurants.webp"
    />
  </Step>

  <Step>
    Aquí verá todos los datos relacionados con la aplicación de su browser , incluidos <DNT>**Page views with JavaScript errors**</DNT>, <DNT>**Core web vitals**</DNT>, <DNT>**User time on the site**</DNT>, <DNT>**Initial page load and route changes**</DNT> y otros.

    <img
      title="Relicstaurants summary"
      alt="Relicstaurants summary"
      src="/images/browser-lab-screenshot-relicstaurants-browser-app.webp"
    />
  </Step>

  <Callout variant="tip">
    ¿No ves tus datos? Asegúrese de haber habilitado el monitoreo del navegador y de que su generador de carga esté ejecutándose.
  </Callout>

  <Step>
    Aviso <DNT>**Page views with javascript errors**</DNT>.

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-page-with-js-errors.webp"
    />

    Aquí verá picos que muestran que su aplicación tiene algunos errores de Javascript.
  </Step>

  <Step>
    Haga clic en <DNT>**Page views with javascript errors**</DNT>.

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-navigate-to-js-errors.webp"
    />

    Esto lo llevará a la página <DNT>**JS errors**</DNT> donde verá todos los errores de JS junto con la instancia de error total.

    <img
      title="javascript errors"
      alt="javascript errors"
      src="/images/browser-lab-screenshot-js-errors.webp"
    />
  </Step>

  <Step>
    Haga clic en el error <DNT>**Cart cannot be empty**</DNT> para obtener más detalles.

    <img
      title="cart error"
      alt="cart error"
      src="/images/browser-lab-screenshot-cart-error.webp"
    />

    Aquí verá <DNT>**errorMessage**</DNT>, <DNT>**INSTANCES**</DNT>, <DNT>**INTERACTIONS AFFECTED**</DNT> y otros detalles relacionados con su error.

    <img
      title="cart error details"
      alt="cart error details"
      src="/images/browser-lab-screenshot-cart-error-details.webp"
    />
  </Step>

  <Step>
    A continuación, navegue hasta la pestaña <DNT>**Error Instances**</DNT> .

    <img
      title="error instances"
      alt="error instances"
      src="/images/browser-lab-screenshot-error-instances.webp"
    />

    ![imagen que muestra la instancia de error](../../../images/nr-browser/error-instances.webp)

    Aquí verá más detalles relacionados con su error particular, incluidos <DNT>**Event Log**</DNT>, <DNT>**Stack trace**</DNT> y otros.
  </Step>

  <Step>
    Desplácese hacia abajo en la página <DNT>**Error Instances**</DNT> para ver el <DNT>**Stack trace**</DNT>.

    <img
      title="stack trace"
      alt="stack trace"
      src="/images/browser-lab-screenshot-stack-trace.webp"
    />

    Aquí verá el rastreo del stack de su error.
  </Step>
</Steps>

Al observar los detalles del error anteriores, ahora conoce el error particular que afecta sus servicios. Sin embargo, el rastreo del stack que se muestra aquí está minimizado y es difícil entender qué está causando este error. Para entender esto, debemos cargar el mapa fuente para eliminar el error.

## Cargue el mapa fuente para eliminar el error de JS

JavaScript minimizado genera principalmente un rastreo del stack inútil y difícil de entender en la página de errores del browser. La carga de mapas de origen convierte estos errores en un rastreo del stack comprensible. También proporciona una referencia útil a las líneas de código y facilita la depuración. Puede cargar su mapa de origen en New Relic a través de UI, la API o el módulo npm.

Aquí, utilizamos UI de New Relic para cargar el mapa fuente y eliminar el error de JS.

<Steps>
  <Step>
    Desde la página de errores de JS, navegue hasta el rastreo de la pila del error y expándalo.

    <img
      title="Expand stack trace"
      alt="Expand stack trace"
      src="/images/browser-lab-screenshot-expand-stack-trace.webp"
    />

    Aquí verá una opción para cargar el mapa fuente.
  </Step>

  <Step>
    Haga clic en <DNT>**find file**</DNT>.

    <img
      title="image showing find file option to upload source map"
      alt="image showing find file option to upload source map"
      src="/images/browser-lab-screenshot-find-file.webp"
    />

    Esto abre una ventana del explorador de archivos para que pueda cargar el mapa fuente desde su almacenamiento local. Busque y cargue su mapa fuente desde el directorio _build/static/js_ de su proyecto.

    <Callout variant="tip">
      Los archivos de mapas de origen tienen una extensión de archivo de `.js.map`. Relicstaurants está configurado para generar mapas fuente y lo encontrará en el directorio _build/static/js_ . Si tiene problemas para generar mapas fuente para su proyecto, siga [nuestra documentación](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors#generate-maps) para aprender cómo generar uno.
    </Callout>
  </Step>

  <Step>
    Una vez que su mapa de origen se haya cargado correctamente, verá el error sin minimizar.

    <img
      title="unminified stack trace"
      alt="unminified stack trace"
      src="/images/browser-lab-screenshot-un-minified.webp"
    />

    Aquí verá el archivo en particular y la línea de código que genera este error. Observe que en la línea 119, el <DNT>**Cart cannot be empty!**</DNT> está asociado con el evento <DNT>**onClick**</DNT> en el archivo _components/layouts/app/app-container/header/app-container-header.js_ y también activa una alerta para el usuario. ¡Echemos un vistazo más de cerca a este archivo!
  </Step>

  <Step>
    Abra la aplicación en el IDE de su elección y navegue hasta el archivo _src/components/layouts/app/app-container/header/app-container-header.js_ . Eche un vistazo más de cerca al código mostrado.

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

    Aquí, observe que el error <DNT>**Cart cannot be empty!**</DNT> solo ocurre cuando el usuario intenta accidentalmente realizar el pago con un carrito vacío. La función está codificada para alertar al usuario final de que no puede realizar el pago con un carrito vacío. Ahora sabes que este error no afectará tus servicios. Sin embargo, existen mejores formas de manejar este caso límite y evitar el error.
  </Step>

  <Step>
    Presione `Ctrl+C` en la terminal que ejecuta su aplicación para dejar de servirla. Actualice _src/components/layouts/app/app-container/header/app-container-header.js_ de la siguiente manera.

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

Aquí, modificó el archivo y muestra un mensaje <DNT>**Nothing in cart**</DNT> en lugar de un error cuando el carrito está vacío. El botón <DNT>**PAY**</DNT> permanece deshabilitado hasta que el usuario final tenga artículos en su carrito.

## Reinicia tu aplicación

Ahora que ha arreglado su aplicación, es hora de reiniciar su servidor local.

```bash
npm run build
npm run newstart
```

Reinicie también su generador de carga.

```bash
python3 simulator.py
```

<Callout variant="important">
  Asegúrese de ejecutar estos comandos en las ventanas de terminal correctas. Si ya no tienes esas ventanas, sigue los pasos del [procedimiento de configuración](/docs/browser/new-relic-browser/lab/set-up-env).
</Callout>

Una vez que el generador de carga comienza a enviar datos a New Relic, observe que la aplicación ya no informa errores de JavaScript.

<img
  title="No errors"
  alt="No errors"
  src="/images/browser-lab-screenshot-no-errors.webp"
/>

## Resumen

En resumen, observó un error en su aplicación y utilizó New Relic Browser para:

1. Revisar el porcentaje de error
2. Analiza los errores JS en tu aplicación
3. Comprender la instancia de error
4. Depure el error de JS cargando el mapa fuente

<Callout
  variant="course"
  title="laboratorio"
>
  Este procedimiento es parte de un laboratorio que le enseña cómo solucionar problemas de su aplicación web con New Relic Browser. A continuación, intente [depurar la lentitud del frontend en su aplicación](/docs/browser/new-relic-browser/lab/debug-slowness/).
</Callout>
