import { Component } from '@angular/core';

@Component({
  selector: 'app-la-caida',
  imports: [],
  templateUrl: './la-caida.html',
  styleUrl: './la-caida.css',
})
export class LaCaida {
     tituloPrincipal = 'La Caída';
  subtitulo = 'La caída del hombre del Edén.';
  imagenUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouPDRHN_pLkdtA_m42e4gXGolHQCkODwteKTPawd6TeCWVKE35BIZ7qI&s=10';
  parrafos: string[] =  [
  'Al apartarse de la voluntad de su Creador, el hombre introdujo el pecado en el mundo y quebrantó la perfecta armonía que hasta entonces reinaba en el Edén, dando inicio a una historia marcada por la separación entre Dios y la humanidad.',
  'Como consecuencia de aquella rebelión, la comunión que disfrutaba con Dios quedó interrumpida, dando lugar a una dolorosa separación entre la santidad divina y la humanidad caída.',
  'Expulsado del jardín que había sido su hogar, el hombre perdió aquella cercanía cotidiana con su Creador y comenzó a transitar un mundo marcado por el esfuerzo, el sufrimiento y las consecuencias del pecado. Desde entonces, la humanidad quedó necesitada de algo mucho más profundo que recuperar un lugar perdido: necesitaba ser reconciliada con Dios y encontrar el camino de regreso a su presencia.'
];
}
