import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private mostrar = true;
  private dias: string[] = ['dia1', 'dia2'];
  private diaSeleccionado = false;
  private seleccionado: string ;

  constructor() { }

  ngOnInit() {

  }

  showDia(dia: string): void {
    this.seleccionado = dia;
  }

}
