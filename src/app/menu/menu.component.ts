import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  public texto: string = '';

  constructor() { }

  ngOnInit(): void {
    this.texto = 'Olá tudo bem?';
  }

  clicou() {
    this.texto = 'Clicou';
  }
}