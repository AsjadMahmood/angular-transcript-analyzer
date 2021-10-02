import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
  path: '',
  // pathMatch: 'full',
  loadChildren: () => import('./main/main.module')
    .then(m => m.MainModule).catch(e => console.error(e))
}];
