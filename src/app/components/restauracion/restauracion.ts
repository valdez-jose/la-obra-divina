import { Component } from '@angular/core';

@Component({
  selector: 'app-restauracion',
  imports: [],
  templateUrl: './restauracion.html',
  styleUrl: './restauracion.css',
})
export class Restauracion {
   tituloPrincipal = 'Restauracion';
  subtitulo = 'Nuestro padre amado nos ama.';
  imagenUrl = 'https://www.soldelsurtenerife.com/asset/thumbnail,1280,720,center,center/media/soldetenerifesur/images/2020/12/26/2020122613381188182.png';
  parrafos: string[] = [
    'El nacimiento de Jesús representa el cumplimiento de la promesa de Dios para restaurar la relación con la humanidad que se había roto en el Edén, enviando a su propio Hijo al mundo como un puente de reconciliación y esperanza.',
    'Al hacerse hombre y nacer en humildad, Jesús asumió nuestra condición humana para abrir un camino de redención, demostrando que el amor de Dios no dejó al ser humano abandonado a las consecuencias del pecado.',
    'De este modo, su llegada hace realidad la promesa de salvación eterna escrita en Marcos 16:16: "El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado", llamando a cada persona a responder con fe para volver a Dios.'
  ];
}
