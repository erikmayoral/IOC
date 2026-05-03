# Documentación obligatoria sobre Navegación

# Mapa de rutes
| Path          | Component           | Accés     |
|---------------|---------------------|-----------|
| /             | Redirect            | Públic    |
| /cataleg      | CatalegComponent    | Públic    |
| /cerca        | CercaComponent      | Públic    |
| /detall/:id   | DetallComponent     | Públic    |
| /preferits    | PreferitsComponent  | Privat    |
| /login        | LoginComponent      | Públic    |
| **            | Redirect            | Públic    |


# provideRouter
Se ha configurado en el archivo app.config.ts, que registar todas la sposibles rutas especificadas en el archivo app.routes.ts.

# RouterOutlet
Es un contenedor que se encarga de cargar automáticamente el componente que toque (según URL actual). Aplicado en el archivo app.component.ts

# RouterLink
Se encarga de poder navegar entre diferneets rutas isn recargar la página. Se ha aplicado en el componente navbar,