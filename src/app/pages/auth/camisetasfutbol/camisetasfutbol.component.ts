import { Component, OnInit } from '@angular/core';
import camisetasfutbol from 'src/app/files/camisetasfutbol.json';

@Component({
  selector: 'app-camisetasfutbol',
  templateUrl: './camisetasfutbol.component.html',
  styleUrls: ['./camisetasfutbol.component.scss']
})
export class CamisetasfutbolComponent implements OnInit {

  camisetas : {imagen: string, equipo: string, division: string, precio: string, url: string}[] = camisetasfutbol;

  constructor() { }

  ngOnInit(): void {
  }

}
