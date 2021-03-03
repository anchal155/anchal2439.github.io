import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  play = new EventEmitter();

  constructor() {}
}
