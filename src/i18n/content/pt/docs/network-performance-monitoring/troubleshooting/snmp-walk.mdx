---
title: Coletando dados para resolução de problemas com o utilitário 'snmpwalk'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Gathering details on all supported OIDs for your device using the 'snmpwalk' utility.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você está tendo problemas para coletar métricas SNMP do seu dispositivo ou precisa ver quais identificadores de objetos (OIDs) específicos são suportados pelo seu dispositivo.

## Solução [#solution]

O utilitário [snmpwalk](https://helpmanual.io/help/snmpwalk/) é uma ferramenta útil para resolver vários problemas de SNMP que você pode encontrar. Como `ktranslate` é executado na rede host do host Linux em que Docker está sendo executado, é uma medida precisa se seus dispositivos estão respondendo ou não às solicitações SNMP e com o que especificamente eles estão respondendo.

<Callout variant="tip">
  A maioria dos sistemas terá `snmpwalk` instalado, mas se necessário, você mesmo poderá carregá-lo executando `apt-get install snmp` ou `yum install net-snmp-utils`.
</Callout>

### Teste de conectividade [#connectivity-testing]

Você pode testar a conectividade com seus dispositivos SNMP com um teste básico para reunir o identificador de objeto do sistema (SysOID) do dispositivo. Se for bem-sucedido, a configuração do SNMP no dispositivo e a conectividade de rede entre o host Docker e o dispositivo estão funcionando bem. Se falhar, você precisará validar as configurações na sua rede interna.

Execute um dos seguintes procedimentos, dependendo da versão do seu dispositivo SNMP:

<CollapserGroup>
  <Collapser
    id="snmp-v2c-example"
    title="Exemplo de SNMP v2c"
  >
    ```bash
    snmpwalk -v 2c -On -c $COMMUNITY $IP_ADDRESS .1.3.6.1.2.1.1.2.0
    ```

    Onde `$COMMUNITY` é a string da comunidade SNMP e `$IP_ADDRESS` é o IP do dispositivo de destino.
  </Collapser>

  <Collapser
    id="snmp-v3-example"
    title="Exemplo de SNMP v3"
  >
    ```bash
    snmpwalk -v 3 -l $LEVEL -u $USERNAME -a $AUTH_PROTOCOL -A $AUTH_PASSPHRASE -x $PRIV_PROTOCOL -X $PRIV_PASSPHRASE -ObentU -Cc $IP_ADDRESS .1.3.6.1.2.1.1.2.0
    ```

    Substituindo as seguintes configurações conforme necessário:

    ```bash
    $LEVEL == noAuthNoPriv | authNoPriv | authPriv
    $USERNAME == SNMP v3 User
    $AUTH_PROTOCOL == MD5 | SHA
    $AUTH_PASSPHRASE == Authentication passphrase
    $PRIV_PROTOCOL == DES | AES
    $PRIV_PASSPHRASE == Privacy passphrase
    $IP_ADDRESS == target device IP
    ```
  </Collapser>
</CollapserGroup>

A seguir está um exemplo da saída esperada após a execução de `snmpwalk`:

```bash
.1.3.6.1.2.1.1.2.0 = OID: .1.3.6.1.4.1.9.1.46
```

### Capturando caminhada SNMP completa [#capturing-snmpwalk]

Você pode querer capturar o resultado da caminhada em cada OID disponível em seus dispositivos. Esta saída é usada ao criar novos perfis SNMP para `ktranslate` e é um requisito para [abrir uma solicitação de perfil no GitHub](https://github.com/kentik/snmp-profiles/issues/new/choose).

As principais diferenças em seu comando para isso são alterar o destino para uma raiz `.` e redirecionar a saída para um arquivo do qual você pode coletar dados posteriormente.

<DNT>
  **SNMP v2 example**
</DNT>

```bash
snmpwalk -v 2c -On -c $COMMUNITY $IP_ADDRESS . >> snmpwalk.out
```

<DNT>
  **SNMP v3 example**
</DNT>

```bash
snmpwalk -v 3 -l $LEVEL -u $USERNAME -a $AUTH_PROTOCOL -A $AUTH_PASSPHRASE -x $PRIV_PROTOCOL -X $PRIV_PASSPHRASE -ObentU -Cc $IP_ADDRESS . >> snmpwalk.out
```

A saída deste comando será um arquivo chamado `snmpwalk.out`, que lista todos os OID aos quais o dispositivo responde.

<Callout variant="tip">
  Em dispositivos com um grande número de interfaces, essa caminhada SNMP pode levar mais de 10 minutos para ser concluída.
</Callout>
