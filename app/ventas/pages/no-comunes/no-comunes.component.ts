import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacioMapa = {
    'masuculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18nPlural

  clientes: string[] = ['Carlos', 'Pedro', 'Juan', 'Fernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {

    this.nombre = 'Carlos'
    this.genero = 'masculino'

  }

  borrarCliente() {

    this.clientes.pop()

  }


  // KeyValue Pipe

  persona = {
    nombre: 'Carlos',
    edad: 38,
    direccion: 'Madrid, España'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe

  miObservable = interval(5000); // 0,1,2,3,4,5,...

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);

  })

}
