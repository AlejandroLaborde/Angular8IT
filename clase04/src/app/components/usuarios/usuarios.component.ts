import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { usuario } from 'src/app/models/usuario';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  miForm:FormGroup;
  usuario : usuario;
  constructor(private serviceUsuario:UsuarioService) { 
  }

  ngOnInit() {
    this.miForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      edad: new FormControl(''),
      password: new FormControl(''),
      token: new FormControl('')
    })

    this.usuario=this.serviceUsuario.obtenerUsuario();
  }

  onSubmit(){
    console.log("asdasasasd");
  }

}
