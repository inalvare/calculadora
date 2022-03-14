import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar.component';
import { CalcularComponent } from '../calcular/calcular.component';



@NgModule({
  declarations: [
    MostrarComponent
  ],
  exports: [
    MostrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MostrarModule { }
