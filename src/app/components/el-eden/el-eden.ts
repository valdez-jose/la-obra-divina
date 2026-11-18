import { Component } from '@angular/core';

@Component({
  selector: 'app-el-eden',
  imports: [],
  templateUrl: './el-eden.html',
  styleUrl: './el-eden.css',
})
export class ElEden {
      tituloPrincipal = 'El hombre en el Edén';
  subtitulo = 'El hombre caminaba con Dios en el Edén.';
  imagenUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8ztGtl9iwAsGM8GwWcM3JTnJiWk30raxuWfDGa8F3w&s=10';
  parrafos: string[] = [
  'En el principio, antes de la caída, el hombre disfrutaba de una comunión íntima y perfecta en el Edén, caminando cada día junto a su Creador en plena armonía y paz.',
  'Dentro de aquel paraíso, Dios le encomendaba con amor los quehaceres del jardín, otorgándole el propósito digno de cuidar, guardar y administrar la belleza de toda la creación.',
  'Vivir bajo la guía divina y cumplir con aquellas tareas cotidianas no representaba una carga, sino la expresión más pura de su identidad y su vínculo eterno con Dios.'
];
}
