import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {

  
  objNota = {
    nombre : null,
    nota1 : null,
    nota2 : null,
    nota3 :null,
    nota4 : null,
    resultado : 0
  }

  mostrarResultado = false;

  listaAlumnos: Alumno = [];

  calcularPromedio(){
    let notas = [Number(this.objNota.nota1), Number(this.objNota.nota2),Number(this.objNota.nota3),Number(this.objNota.nota4)];
    let notaminima = Math.min(...notas)
    let notasSinMinima = notas.filter(nota => nota !== notaminima);
    this.objNota.resultado = notasSinMinima[0] * 0.2 + notasSinMinima[1] * 0.3 + notasSinMinima[2] * 0.5;
    this.listaAlumnos.push({
      id: 1, nombre: String(this.objNota.nombre), promedio: this.objNota.resultado
    });
    this.mostrarResultado = true;
  }
}

type Alumno = Array<{id:number , nombre: string , promedio: number}>
