import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import * as _ from "lodash";

// services
import { ApiService } from "src/app/core/services/api/api.service";

// models
import { <%= classify(name) %> } from "../models";
import { <%= classify(name) %>Path } from "src/app/core/models/api-path.models";

@Injectable({
  providedIn: "root"
})
export class <%= classify(name) %>Service {
  constructor(private api: ApiService) {}

  getList(condition: any): Observable<<%= classify(name) %>[]> {
    const params = _.assign(this.api.defaultParams, { condition });
    return this.api.post(<%= classify(name) %>Path.list, params).pipe(
      switchMap(res => {
        if (res.succeedYn) {
          return of(
            (res.result.list as Array<any>).map(v => ({
              id: v.rowid,
              volumnInfo: _.cloneDeep(v)
            }))
          );
        } else {
          return throwError("api response error");
        }
      }),
      catchError(error => {
        console.error(error);
        return throwError("network state error");
      })
    );
  }
}
