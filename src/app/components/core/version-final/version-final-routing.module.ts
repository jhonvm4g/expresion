import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionFinalComponent } from './version-final.component';

const routes: Routes = [
  {
    path: '',
    component: VersionFinalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionFinalRoutingModule {}
