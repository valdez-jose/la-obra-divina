
import { Routes } from '@angular/router';

import { Inicio } from './components/inicio/inicio';
import { Mensaje } from './components/mensaje/mensaje';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'mensaje', component: Mensaje },
];