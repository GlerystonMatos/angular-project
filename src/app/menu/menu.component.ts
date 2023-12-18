import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined

  ngOnInit() {
    this.items = [
      {
        label: 'Paginas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: 'home',
          },
          {
            label: 'Usuario',
            icon: 'pi pi-fw pi-user',
            routerLink: 'usuario',
          },
          {
            label: 'Estados',
            icon: 'pi pi-fw pi-list',
            routerLink: 'estados',
          }
        ]
      },
    ];
  }
}