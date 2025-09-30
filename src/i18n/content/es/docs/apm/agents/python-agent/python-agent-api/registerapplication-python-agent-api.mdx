---
title: registrar_application (API del agente Python)
type: apiDoc
shortDescription: Registra el agente Python inmediatamente. Se utiliza para la inicialización manual del agente.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: Registers the Python agent immediately, instead of allowing it to be done more passively.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.register_application(name=None, timeout=None)
```

Registra el agente Python inmediatamente. Se utiliza para la inicialización manual del agente.

## Descripción

Cuando se llama a [`initialize`](/docs/agents/python-agent/python-agent-api/initialize) , configura el agente Python pero no registra el agente con el [recolector](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector). Esta llamada registra al agente con el recolector.

Esto se utiliza principalmente para [transacciones en segundo plano](/docs/agents/python-agent/python-agent-api/background_task) no web instrumentadas utilizando la API. Cuando se usa con transacción no web, llame `register_application` lo antes posible después de la llamada `initialize` .

Para transacciones web, el agente normalmente se registra automáticamente cuando ocurre la primera solicitud web o tarea en segundo plano y el agente recibe su [configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) del recolector. Debido a que el registro puede demorar aproximadamente un segundo, los detalles generalmente se pierden desde la primera transacción. Puede recopilar todos estos datos forzando el registro con `register_application`, aunque hacerlo significa que su aplicación puede esperar a que se complete el registro antes de atender cualquier solicitud web o ejecutar tareas en segundo plano.

Si el script en sí ejecuta el servidor WSGI, llame a `register_application` desde el hilo principal del programa en el archivo de script principal. Si usa Apache/mod_wsgi o uWSGI, realice la llamada desde el archivo de script WSGI y realice la llamada inmediatamente después `initialize`<DNT>**.**</DNT>

Esta llamada devuelve el objeto de la aplicación, de la misma manera que lo hace [`application`](/docs/agents/python-agent/python-agent-api/application) . El objeto de aplicación se utiliza para obtener una referencia a la aplicación de monitor de agente actual y algunas llamadas a la API del agente de Python lo utilizan.

### Evite llamar durante el bloqueo de importación global [#globl-lock]

No llame a `register_application` con un tiempo de espera distinto de cero cuando se mantendrá el bloqueo de importación global de Python. En otras palabras, no lo llame en un archivo de módulo en el ámbito global mientras se importa el módulo. Hacerlo puede resultar en un punto muerto temporal con el subproceso en segundo plano creado por esta llamada (el punto muerto no se romperá hasta que expire el tiempo de espera).

Tenga en cuenta que muchos servidores WSGI importan el módulo que contiene la aplicación WSGI a través de los mecanismos de importación de módulos estándar de Python. En esos casos, se mantendrá el bloqueo de importación global y puede ocurrir el problema de interbloqueo descrito anteriormente.

Para Gunicorn: el problema de punto muerto que acabamos de describir también puede ocurrir cuando se usa Gunicorn. El problema es que activar `register_application` desde el módulo WSGI no es seguro porque precarga el módulo en el proceso principal. Para usar `register_application` con Gunicorn (con o sin tiempo de espera), llámalo desde una devolución de llamada `post_fork()` . Esto no es un problema con Apache/mod_wsgi, ya que esas herramientas han sido diseñadas para no hacer esto, por lo que es seguro crear subprocesos en segundo plano cuando se carga la aplicación WSGI.

### Llamada después de la bifurcación del proceso del trabajador [#worker-processes]

Si está registrando transacciones en el proceso del trabajador secundario, no llame a `register_application` en el proceso principal antes de que se bifurquen los procesos del trabajador secundario. Si llamara a `register_application` antes de bifurcar, el subproceso del agente en segundo plano se eliminaría cuando se bifurcara el proceso. Dado que el hilo principal informa datos al recolector, el agente no podrá informar datos del proceso de trabajo secundario.

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        Opcional. El nombre de la aplicación. Si se establece, esto anula el nombre de la aplicación establecido en la configuración del agente Python.
      </td>
    </tr>

    <tr>
      <td>
        `timeout`

        _int_ o _flotante_
      </td>

      <td>
        La cantidad de segundos que la aplicación intentará registrarse antes de darse por vencido y enviar una respuesta; lo que significa que esta línea se bloqueará hasta que se inicie New Relic o se exceda el tiempo de espera. Un valor de `0` significa que la aplicación no esperará el registro antes de atender solicitudes. El valor predeterminado es `0`. Si ejecuta una aplicación web, no se recomienda establecer este valor, ya que bloqueará y retrasará la aplicación mientras se inicia New Relic. Si instrumenta una sola ejecución de programa o tarea, donde el proceso se ejecuta una vez y finaliza inmediatamente, se recomienda configurar esto ya que, de lo contrario, New Relic no se iniciará a tiempo para capturar la información.

        Este valor proporciona el número máximo de segundos que se debe bloquear a la persona que llama antes de que se le devuelva el control y se le permita continuar. Sin ningún valor, la llamada utiliza la configuración [`startup_timeout`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#startup-timeout) configurada globalmente en la configuración del agente, que es `0.0` de forma predeterminada.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve un objeto de aplicación que pueden utilizar otras llamadas API del agente Python.

## Ejemplos

### Registrar una tarea en segundo plano [#register-example]

Este ejemplo registra una tarea en segundo plano que no es web con un tiempo de espera prolongado. Normalmente, para una aplicación web, tendría un tiempo de espera muy corto (el valor predeterminado es 0), pero podría establecer un tiempo de espera más largo para una tarea poco frecuente que no sea web para garantizar que se realicen la inicialización y el registro.

```py
import newrelic.agent

newrelic.agent.initialize('newrelic.ini')
newrelic.agent.register_application(timeout=10.0)

@newrelic.agent.background_task()
def main():
    pass

if __name__ == '__main__':
    main()
```
