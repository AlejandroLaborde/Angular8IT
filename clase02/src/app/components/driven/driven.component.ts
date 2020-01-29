import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formularioActual( datosFormulario ){
    console.log(datosFormulario);
  }

}
// <!-- validar-driven.component:
// ○ HTML: Crear un formulario Template-driven con tres campos:
  // ■ nombre: tipo texto, requerido, asociado a un objeto definido por la clase a
  // través del ngModel, requerido.
  // ■ director: tipo texto, asociado a un objeto definido por la clase a través del
  // ngModel.
  // ■ genero: campo select, asociado a un objeto definido por la clase a través
  // del ngModel. Los options de este combo van a ser establecidos por un
  // array definido por la clase. Por lo tanto la generación de cada option del
  // combo select se va a hacer a través de la directiva *ngFor
  // ■ A través de la propiedad hidden, se va a mostrar los datos enviados una
  // vez que se presione el botón que de lugar al evento submit.
// ○ Clase: Instanciar una clase entidad llamada Pelicula, que va a ser utilizada como
// enlace para los campos del formulario.
// ○ crear un método que capture el evento submit de la vista y que establezca como
// true una propiedad de la clase que me sirva como flag para mostrar los datos
// enviados. -->
