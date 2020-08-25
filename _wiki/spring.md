---
layout: wiki
title:  "Spring Framework"
icono:  fjalonso-icon-logo-spring
link:   https://spring.io
fix:    true
---

Spring es un contenedor y marco de trabajo ligero de inyección de dependencias y orientado a aspectos:

* **Contenedor**: Es un contenedor en el sentido de que contiene y gestiona el ciclo de vida y configuración de objetos de aplicación. En Spring se puede declarar cómo crear cada objeto de la aplicación, cómo deben configurarse y cómo deben asociarse entre sí.
* **Marco de trabajo**: Hace posible configurar y escribir aplicaciones complejas desde componentes sencillos. En Spring, los objetos de aplicación se escriben de forma declarativa, normalmente en un archivo XML. Spring también proporciona gran funcionalidad de infraestructura (gestión de transacciones, integración de marco de trabajo de persistencia, etc) dejándonos a nosotros el desarrollo de la lógica de la aplicación.
* **Ligero**: Spring es ligero tanto en términos de tamaño como en tiempo de procesamiento. Es más, Spring no es intrusivo: los objetos de una aplicación habilitada para Spring a menudo no tienen dependencias de clases específicas de Spring.
* **Inyección de dependencia**: Spring fomenta el acoplamiento débil mediante la técnica de [inyección de dependencia](https://es.wikipedia.org/wiki/Inyecci%C3%B3n_de_dependencias) (DI). Cuando se aplica la DI, se otorga a los objetos de forma pasiva sus dependencias, en lugar de crear o buscar objetos dependientes por sí mismos. El contenedor otorga las dependencias al objeto en la creación de la instancia sin esperar a que se pida.
* **Orientado a aspectos**: Spring tiene un amplio soporte para [programación orientada a aspectos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_aspectos) (AOP) que permite el desarrollo cohesivo separando la lógica empresarial de la aplicación de los servicios de sistemas (como auditoría y gestión de transacciones). Los objetos de aplicación hacen lo que se supone que deben hacer (realizar la lógica empresarial) y nada más. No son responsables (o ni siquiera conscientes) de otros aspectos del sistema, como los registros o soporte transaccional.
