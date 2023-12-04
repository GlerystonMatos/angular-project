import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [
    FormsModule,
    CommonModule,
    UsuarioRoutingModule,
  ]
})

export class UsuarioModule { }