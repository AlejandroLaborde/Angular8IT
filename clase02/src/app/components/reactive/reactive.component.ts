import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  objectFormulario: FormGroup;

  constructor( private builder: FormBuilder) {

    this.objectFormulario = this.completaDatosDesdeElForm();

  }

  ngOnInit() {
  }

  completaDatosDesdeElForm(): FormGroup {

    return this.objectFormulario = this.builder.group({
        nombre: ['', [ Validators.required, Validators.minLength(5)]],
        director: ['', Validators.required],
        genero: ['', Validators.required]
    });

  }

  formularioActual(){
    console.log(this.objectFormulario);
  }
}
