import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  @Output() disparadorDeServicio: EventEmitter<any>=new EventEmitter();
  constructor() { }
}
