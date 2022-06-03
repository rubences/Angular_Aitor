import { Component, OnInit } from '@angular/core';
import videojuegos from 'src/app/files/videojuegos.json';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.scss']
})
export class VideojuegosComponent implements OnInit {

  videojuegoss : {imagen: string, juego: string, plataforma: string, precio: string,  url: string}[] = videojuegos;

  constructor() { }

  ngOnInit(): void {
  }

}
