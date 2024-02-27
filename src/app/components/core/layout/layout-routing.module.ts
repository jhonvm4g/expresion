import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('../home/home.module').then((x) => x.HomeModule)
            },
            {
                path: 'registrar',
                loadChildren: () =>
                    import('../registrar/registrar.module').then((x) => x.RegistrarModule)
            },
            {
                path: 'form',
                loadChildren: () =>
                    import('../form/form.module').then((x) => x.FormModule)
            },
            {
                path: 'convocatoria',
                loadChildren: () =>
                    import('../convocatorias/convocatorias.module').then((x) => x.ConvocatoriasModule)
            },
            {
                path: 'proceso',
                loadChildren: () =>
                    import('../procesos/proceso.module').then((x) => x.ProcesoModule)
            },
            {
                path: 'version-final',
                loadChildren: () =>
                  import('../version-final/version-final.module').then(
                    (x) => x.VersionFinalModule
                  ),
              },
            {
                path: 'preliminar',
                loadChildren: () =>
                    import('../firma/firma.module').then((x) => x.FirmaModule)
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
