import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from '../../core/providers/state/state.service';

@Injectable({ providedIn: 'root' })
export class SignInGuard  {

    constructor(private stateService: StateService) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.stateService.select(state => state.signedIn).pipe(
            map(signedIn => !signedIn),
        );
    }
}
