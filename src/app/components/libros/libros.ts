
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LibroCard {
  imagen: string;
  titulo: string;
  descripcion: string;
  enlace: string;
  textoBoton: string;
}

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css']
})
export class Libros{
  // Arreglo con 4 elementos para que se distribuyan en la tira
  libros: LibroCard[] = [
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX11yJyqLw5IHHRGGBrVhfKZ3Udl29QB7M6NJs4NUBuQ&s=10',
      titulo: 'Génesis: Orígenes',
      descripcion: 'Guía de estudio inicial.',
      enlace: 'https://www.goodreads.com/book/show/54545297-g-nesis-libro-primero-de-mois-s',
      textoBoton: 'Ver más'
    },
    {
      imagen: 'https://www.literaturabautista.com/wp-content/files/Adan-y-Eva-en-el-huerto-del-Eden.jpg',
      titulo: 'El Edén Perdido',
      descripcion: 'Detalles del huerto.',
      enlace: 'https://www.literaturabautista.com/el-huerto-de-eden-y-su-tipologia/',
      textoBoton: 'Ver más'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh61dwf1ESsNVZMm7PLwouyjl-8pwSIPiE2BripjFYi32lTPOyMZwrsmI&s=10',
      titulo: 'La Restauración',
      descripcion: 'El camino de vuelta.',
      enlace: 'https://verbodivino.es/libro/4946/el-nacimiento-de-jesus-segun-mateo-y-lucas',
      textoBoton: 'Ver más'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHhbIdvKvFbXSF2Cy0pvCXry_CDqyL8r5-vLrq3sryW65F9Cd4kJMXHs&s=10',
      titulo: 'Cantos y Salmos',
      descripcion: 'Poesía y alabanza.',
      enlace: 'https://verbodivino.es/libro/812/salmos-y-canticos',
      textoBoton: 'Ver más'
    }
  ]; 
}