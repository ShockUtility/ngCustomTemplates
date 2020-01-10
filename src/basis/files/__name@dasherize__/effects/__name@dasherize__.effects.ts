import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { <%= classify(name) %>ApiActions, <%= classify(name) %>ListActions } from '../actions';

import { <%= classify(name) %>Service } from '../services';

@Injectable()
export class <%= classify(name) %>Effects {
  constructor(private actions$: Actions, private service: <%= classify(name) %>Service) {}

  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>ListActions.loadGridData),
      switchMap(({ condition }) => {
        return this.service.getList(condition).pipe(
          map(gridDataList => <%= classify(name) %>ApiActions.loadGridDataSunccess({ gridDataList })),
          catchError(error => of(<%= classify(name) %>ApiActions.loadGridDataFailure({ error }))),
        );
      }),
    ),
  );
}
