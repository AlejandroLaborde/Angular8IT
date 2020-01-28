
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  datosFormulario : FormGroup;

  constructor( private formBuilder : FormBuilder) {
    this.creaFormulario();
   }

  ngOnInit() {
  }


  creaFormulario(): FormGroup {

    return this.datosFormulario = this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido : [ '' , Validators.required],
      email: ['' , Validators.pattern('123456@mail')]
    })
  }

  muestraDatos(){
    
    console.log(this.datosFormulario);
  }

}
