import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})

export class EstadosComponent implements OnInit {

  estados: any = [];
  constructor(private estadosService: EstadoService) {
  }

  ngOnInit() {
    this.estadosService.getEstados().subscribe(
      response => {
        this.estados = response;
      })
  }
}