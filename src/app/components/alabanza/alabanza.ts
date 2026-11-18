
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-alabanza',
  imports: [],
  templateUrl: './alabanza.html',
  styleUrl: './alabanza.css',
})
export class Alabanza implements OnInit {
  private sanitizer = inject(DomSanitizer);

  listaAlabanzas: Array<{ id: number; titulo: string; autor: string; video: SafeResourceUrl }> = [];

  ngOnInit() {
    this.listaAlabanzas = [
      {
        id: 1,
        titulo: 'Santo por siempre',
        autor: 'Adoración La IBI',
        // 🔴 INCORRECTO: 'https://www.youtube.com/watch?v=YQay6GcxtII'
        // 🟢 CORRECTO (Formato embed):
        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/YQay6GcxtII'
        )
      },
      { 
        id: 2,
        titulo: 'Yo Entro al Lugar Mas Alto (Cover)',   
        autor: 'Soy Rebekka',
        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/I605rAsbkP8'
        )
      }
    ];
  }
}