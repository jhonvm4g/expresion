import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/core/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
