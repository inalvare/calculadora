import { Component, Input, OnInit } from '@angular/core';
import { CalcularComponent } from '../calcular/calcular.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit{

  resultado: string="";
  constructor(private servicio: ServicioService){

  }
  ngOnInit(): void {
    this.servicio.disparadorDeServicio.subscribe(data =>{
      console.log(data);
      console.log(this.resultado)
      if (data.data!=0) this.resultado=data.data;
      else this.resultado="";
    })
  }
}
