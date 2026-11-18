
import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Creacion } from '../creacion/creacion';
import { Libros } from '../libros/libros';
import { ElEden } from '../el-eden/el-eden';
import { LaCaida } from '../la-caida/la-caida';
import { Restauracion } from '../restauracion/restauracion';
import { Alabanza } from '../alabanza/alabanza';

@Component({
  selector: 'app-inicio',
  imports: [
    Header,
  Creacion,
  Libros,
  ElEden,
  LaCaida,
  Restauracion,
  Alabanza
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}