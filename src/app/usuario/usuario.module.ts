import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    UsuarioRoutingModule,
  ]
})

export class UsuarioModule { }