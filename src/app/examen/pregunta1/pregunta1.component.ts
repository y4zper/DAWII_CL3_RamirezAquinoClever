import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {
  
      ObjEstacionamiento = {
        horas : null,
        minutos : null, 
        resultado :0 
      }

      mostrarResultado = false;

      calcularPago(){
        this.ObjEstacionamiento.resultado = ((Number(this.ObjEstacionamiento.horas)*Number(this.ObjEstacionamiento.minutos))/60)*1500;

        this.mostrarResultado = true;
      }
}
