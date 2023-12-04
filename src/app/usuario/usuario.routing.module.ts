import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro';

const routes: Routes = [
    {
        path: '',
        component: UsuarioComponent,
    },
    {
        path: 'add',
        component: UsuarioCadastroComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})

export class UsuarioRoutingModule { };