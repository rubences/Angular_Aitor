import { Component, OnInit } from '@angular/core';
import zapatillas from 'src/app/files/zapatillas.json';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {

  zapatillass : {imagen: string, marca: string, modelo: string, precio: string, url: string}[] = zapatillas;

  constructor() { }

  ngOnInit(): void {
  }

}
