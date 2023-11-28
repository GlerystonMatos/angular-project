import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario: Usuario = new Usuario();
    usuario.nome = "Gleryston Matos";
    usuario.email = "glerystonmatos@gmail.com";

    return usuario;
  }

  public listaUsuarios(): Usuario[] {
    return [
      {
        nome: 'Gleryston',
        email: 'gleryston@gmail.com',
      },
      {
        nome: 'Tobias',
        email: 'tobias@gmail.com',
      },
      {
        nome: 'Mel',
        email: 'mel@gmail.com',
      },
      {
        nome: 'Lola',
        email: 'lola@gmail.com',
      },
    ]
  }
}