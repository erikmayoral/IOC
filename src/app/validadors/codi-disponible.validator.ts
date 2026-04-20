import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay, switchMap, catchError } from 'rxjs/operators';
import { ElementService } from '../services/element.service';

export function codiDisponibleValidator(elementService: ElementService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(
      delay(500),
      switchMap(codi => elementService.codiDisponible(codi)),
      map(disponible => {
        return disponible ? null : { sensResultats: true };
      }),
      catchError(() => of(null))
    );
  };
}