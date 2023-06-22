import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entradas-detalle',
  templateUrl: './entradas-detalle.page.html',
  styleUrls: ['./entradas-detalle.page.scss'],
})
export class EntradasDetallePage implements OnInit {

  entrada: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.entrada = this.router.getCurrentNavigation().extras.state.entrada;
      console.log(this.entrada);
    }
  }

  ngOnInit() {
  }

}
