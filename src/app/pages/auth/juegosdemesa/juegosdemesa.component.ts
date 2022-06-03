import { Component, OnInit } from '@angular/core';
import juegosdemesa from 'src/app/files/juegosdemesa.json'

@Component({
  selector: 'app-juegosdemesa',
  templateUrl: './juegosdemesa.component.html',
  styleUrls: ['./juegosdemesa.component.scss']
})
export class JuegosdemesaComponent implements OnInit {

  juegosdemesas : {imagen: string, nombre: string, minedad: string, minjugadores: string, precio: string, url: string}[] = juegosdemesa;

  constructor() { }

  ngOnInit(): void {
  }

}
