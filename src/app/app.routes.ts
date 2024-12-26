import { Routes } from '@angular/router';
import {CaramellaEasterEggComponent} from '../caramella-easter-egg/caramella-easter-egg.component';
import {GambaComponent} from '../gamba/gamba.component';
import {easterEgg} from './hidden.routes';

export const routes: Routes = [
  {
    path: '',
    component: GambaComponent
  },
  {
    path: easterEgg,
    component: CaramellaEasterEggComponent
  }
];
