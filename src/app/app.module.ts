import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularModule } from './calcular/calcular.module';
import { MostrarModule } from './mostrar/mostrar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalcularModule,
    MostrarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
