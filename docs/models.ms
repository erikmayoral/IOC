# Configuració de serveis

## API Mock (desenvolupament)

### Arrencar el servidor

```bash
json-server --watch tools/api/cataleg.json --port 3000 --delay 1000
```

### Endpoints disponibles

- `GET /elements` - Retorna tots els elements
- `GET /elements?popular=true` - Filtra elements populars
- `GET /elements?q=Arduino` - Cerca elements per nom
- `GET /elements/:id` - Obté un element per ID

### Configuració

- **Port:** 4301
- **Latència simulada:** 1000ms
- **Fitxer de dades:** `tools/api/cataleg.json`

## Canviar a API real

Per utilitzar una API real, modifiqueu `src/environments/environment.development.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.exemple.com',
  apiKey: 'LA_VOSTRA_CLAU_API' // Si cal autenticació
};
```
# Mapeo del modelo de datos

Correspondencia campos

| Camp API | Camp intern | Transformació |
|----------|-------------|---------------|
| `id` | `id` | Cap |
| `nom` | `nom` | Cap |
| `descripcio` | `descripcio` | Cap |
| `categoria` | `categoria` | Cap |
| `preu` | `preu` | Cap |
| `imatge` | `imatge` | Cap |
| `popular` | `esPopular` | Renombrat |
| `stock` | `stock` | Cap |
| — | `dataAfegit` | Afegit (Date actual) |

### Exemple d'ús

```typescript
constructor(private elementService: ElementService) {}

ngOnInit() {
  // Carregar populars
  this.elementService.obtenirPopulars();

  // Observar estat
  effect(() => {
    console.log('Estat:', this.elementService.estat());
    console.log('Elements:', this.elementService.elements());
  });
}

# Formularis

## FormulariCercaComponent

### Funcionalitat

Formulari reactiu per cercar elements del catàleg amb validació de longitud mínima i cerca automàtica amb debounce.

### Validacions

| Camp | Validació | Missatge d'error |
|------|-----------|------------------|
| terme | `minLength(3)` | "Mínim 3 caràcters" |

### Comportament

- **Cerca automàtica:** Després de 500ms sense escriure, cerca automàticament
- **Debounce:** Evita cerques excessives mentre l'usuari escriu
- **Indicador de càrrega:** Spinner petit mentre cerca
- **Botó netejar:** Apareix quan hi ha text, neteja i torna als populars

### Exemple d'integració

```typescript
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';

@Component({
  imports: [FormulariCercaComponent],
  template: `<app-formulari-cerca />`
})
export class PageComponent {}
```