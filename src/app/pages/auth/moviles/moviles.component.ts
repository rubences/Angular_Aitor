import { Component, OnInit } from '@angular/core';
import moviles from 'src/app/files/moviles.json';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.scss']
})
export class MovilesComponent implements OnInit {

  moviless : {imagen: string, marca: string, modelo: string, tamano: string, precio: string, url: string}[] = moviles;

  constructor() { }

  ngOnInit(): void {
  }

}
