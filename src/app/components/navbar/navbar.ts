

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update(valor => !valor);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
