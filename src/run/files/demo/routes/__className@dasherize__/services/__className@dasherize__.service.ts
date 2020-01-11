import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class <%= classify(className) %>Service {
  constructor(private api: ApiService) {}
}
