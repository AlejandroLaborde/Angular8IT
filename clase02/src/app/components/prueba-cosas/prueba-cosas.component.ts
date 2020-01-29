import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-cosas',
  templateUrl: './prueba-cosas.component.html',
  styleUrls: ['./prueba-cosas.component.css']
})
export class PruebaCOSASComponent implements OnInit {

  nombre = "Alejandro";
  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    console.log(this.nombre);
  }

}
