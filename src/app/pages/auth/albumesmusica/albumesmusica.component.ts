import { Component, OnInit } from '@angular/core';
import albumesmusica from 'src/app/files/albumesmusica.json'

@Component({
  selector: 'app-albumesmusica',
  templateUrl: './albumesmusica.component.html',
  styleUrls: ['./albumesmusica.component.scss']
})
export class AlbumesmusicaComponent implements OnInit {

  albumes : {imagen: string, nombre: string, cantante: string, numerocanciones: string, precio: string, url: string}[] = albumesmusica;

  constructor() { }

  ngOnInit(): void {
  }

}
