import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacioMapa = {
    'masuculino': 'invitarlo',
    'femenino': 'invitarla'
  }

}
