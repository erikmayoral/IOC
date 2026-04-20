import { ElementCataleg, ElementApiResponse } from '../models/element.model';

export function adaptarElementApi(apiElement: ElementApiResponse): ElementCataleg {
  return {
    id: apiElement.id,
    titol: apiElement.nom,
    descripcio: apiElement.descripcio,
    categoria: apiElement.categoria,
    preu: apiElement.preu,
    imatgeUrl: apiElement.imatge,
    esPopular: apiElement.popular,
    unitats: apiElement.stock,
  };
}

export function adaptarElementsApi(apiElements: ElementApiResponse[]): ElementCataleg[] {
  return apiElements.map(adaptarElementApi);
}

export function elementBuit(): ElementCataleg {
  return {
    id: '',
    titol: '',
    descripcio: '',
    categoria: '',
    preu: 0,
    imatgeUrl: 'https://via.placeholder.com/300x200?text=Sense+imatge',
    esPopular: false,
    unitats: 0,
  };
}