# **Métodos de petición HTTP**

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent (en-US), o cacheable.

### **GET**
El método **GET** solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

### **HEAD**
El método **HEAD** pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

### **POST**
El método **POST** se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

### **PUT**
El modo **PUT** reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

### **DELETE**
El método **DELETE** borra un recurso en específico.

### **CONNECT**
El método **CONNECT** establece un túnel hacia el servidor identificado por el recurso.

### **OPTIONS**
El método **OPTIONS** es utilizado para describir las opciones de comunicación para el recurso de destino.

### **TRACE**
El método **TRACE** realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

### **PATCH**
El método **PATCH** es utilizado para aplicar modificaciones parciales a un recurso.

## **Especificaciones**

| Especificación | Título | Comentario |
| -- | -- | -- |
| RFC 7231, section 4: Métodos de petición | Protocolo de Transferencia de HiperTexto (HTTP/1.1): Semánticas y Contenido | Especifica GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE. |
| RFC 5789, section 2: Método Patch | Método PATCH para HTTP | Especifica PATCH. |

### *Mas informacion*

[Metodos HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)

# **Códigos de estado de respuesta HTTP**

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299),
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
5. Errores de los servidores (500–599).

Los códigos de estado se definen en la sección 10 de RFC 2616. Puedes obtener las especificaciones actualizadas en RFC 7231.

## **Especificaciones**

### **Respuestas informativas**
- 100 Continue
- 101 Switching Protocol
- 102 Processing (WebDAV (en-US))
- 103 Early Hints (en-US)

### **Respuestas satisfactorias**
- 200 OK
- 201 Created
- 202 Accepted
- 203 Non-Authoritative Information
- 204 No Content (en-US)
- 205 Reset Content (en-US)
- 206 Partial Content
- 207 Multi-Status (WebDAV (en-US))
- 208 Multi-Status (WebDAV (en-US))
- 226 IM Used (HTTP Delta encoding)

### **Redirecciones**
- 300 Multiple Choice (en-US)
- 301 Moved Permanently (en-US)
- 302 Found
- 303 See Other (en-US)
- 304 Not Modified
- 305 Use Proxy Deprecated
- 306 unused
- 307 Temporary Redirect (en-US)
- 308 Permanent Redirect (en-US)

### **Errores de cliente**
- 400 Bad Request
- 401 Unauthorized
- 402 Payment Required
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed (en-US)
- 406 Not Acceptable (en-US)
- 407 Proxy Authentication Required (en-US)
- 408 Request Timeout
- 409 Conflict (en-US)
- 410 Gone (en-US)
- 411 Length Required (en-US)
- 412 Precondition Failed (en-US)
- 413 Payload Too Large
- 414 URI Too Long (en-US)
- 415 Unsupported Media Type (en-US)
- 416 Requested Range Not Satisfiable (en-US)
- 417 Expectation Failed (en-US)
- 418 I'm a teapot
- 421 Misdirected Request
- 422 Unprocessable Entity (en-US) (WebDAV (en-US))
- 423 Locked (WebDAV (en-US))
- 424 Failed Dependency (WebDAV (en-US))
- 426 Upgrade Required (en-US)
- 428 Precondition Required (en-US)
- 429 Too Many Requests (en-US)
- 431 Request Header Fields Too Large (en-US)
- 451 Unavailable For Legal Reasons (en-US)

### **Errores de servidor**
- 500 Internal Server Error
- 501 Not Implemented (en-US)
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout
- 505 HTTP Version Not Supported
- 506 Variant Also Negotiates (en-US)
- 507 Insufficient Storage (en-US)
- 508 Loop Detected (en-US) (WebDAV (en-US))
- 510 Not Extended (en-US)
- 511 Network Authentication Required (en-US)

### *Mas informacion*

[Codigos de respuesta HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status#errores_de_cliente)