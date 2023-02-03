import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

export class CustomValidators {
  static createValidator(http: HttpClient) {
    const baseUrl = config.baseUrl;

    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const { email, password } = control.value;

      return http
        .get(
          `${baseUrl}/Members/check-user?email=${email}&password=${password}`
        )
        .pipe(
          map(() => null),
          catchError(() => of({ userExists: true }))
        );
    };
  }
}
