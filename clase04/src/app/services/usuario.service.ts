import { Injectable } from '@angular/core';
import { usuario } from '../models/usuario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: usuario ={
    nombre:"alejandro",
    apellido: "laborde",
    edad:24,
    pasword:"",
    token:"asd"
  }

  constructor(private http: HttpClient) { 

    this.logIn();
  }
  
  logIn(){
    let params = new HttpParams();
    params.set("email","eve.holt@reqres.in");
    params.set("password", "cityslicka");
    
    let header= new HttpHeaders();

    this.http.post('https://reqres.in/api/login',header, {JSON.stringify(params)} ).subscribe(data=>{
      console.log(data);
    });
  }
  obtenerUsuario(): usuario{
    this.http.get('https://reqres.in/api/user').subscribe(data=>{
      this.usuario.edad=data.data[0].year;
      this.usuario.nombre=data.data[0].name;
      this.usuario.apellido=data.data[0].pantone_value;
    });
    return this.usuario;
  }
  
}
