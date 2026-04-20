# Documentaciòn validadores

/ Síncronos

Se ejecutan de forma instantánea cuando el valor del campo cambia.

Usamos un validador de longitud mínima -minLnegth-, definido como 2, y uno de longitud máxima -maxLnegth-, definido como 50.

En caso de no cumplir con los límites, se bloque ala ejecución del método cercar()



/ Asíncrono

No se ejecutan de manera instantánea, si no que requieren cierto tiempo de reacción.
Hemos implementado un codiDisponibleValidator, que se activa solo cuando los síncornos són positivos.

Retorno de errores: Si el servicio determina que no hay resultados para ese código/término, el validador devuelve el objeto { sensResultats: true }. Si hay resultados, devuelve null (indicando que el campo es válido).

Estado PENDING: Mientras el validador espera la respuesta del servicio (los 500ms programados), el campo entra en un estado llamado PENDING. Durante este tiempo, mostramos el indicador visual "Validant..." en la interfaz.


/ Comportaminto debounce

El Debounce es una técnica de optimización que hemos implementado utilizando el operador debounceTime(400) de RxJS sobre el observable valueChanges del input.

Hace que no se ejecute la búsqueda hasta que pasa x tiempo, para permititr al usuario escribri una palabra entera yque no se hagan búsquedas intermédias con el contenido a medias.