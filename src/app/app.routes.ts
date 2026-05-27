import { Routes } from '@angular/router';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

export const routes: Routes = [
  {
    path: 'asistencia/grupo/laboratorio',
    component: AsistenciaComponent
  },
  {
    path: '',
    redirectTo: '/asistencia/grupo/laboratorio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/asistencia/grupo/laboratorio'
  }
];
