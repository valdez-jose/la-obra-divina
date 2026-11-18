import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creacion',
  imports: [CommonModule],
  templateUrl: './creacion.html',
  styleUrl: './creacion.css',
})
export class Creacion {
    tituloPrincipal = 'La creacion';
  subtitulo = 'Dios lo creo todo';
  imagenUrl = 'https://image.slidesharecdn.com/microsoftpowerpoint-lacreacindeluniversomododecompatibilidad-130920180426-phpapp02/75/LA-CREACION-DEL-MUNDO-PARA-NINOS-1-2048.jpg';
  parrafos: string[] = [
    'En génesis 1 nos relata como nuestro padre amado creo el cosmos de la nada mediante su palabra, transformando el caos inicial en un universo ordenado, bello y perfectamente estructurado en seis días. Cada etapa de la obra divina es declarada buena, reflejando el propósito y la sabiduría de un Creador soberano que sostiene la realidad. El punto culminante de este diseño es la creación del ser humano a imagen y semejanza de Dios, dotado de dignidad y de la responsabilidad de cuidar la tierra, culminando con el establecimiento del descanso sagrado.'
  ];
}
