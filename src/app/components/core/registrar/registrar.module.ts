import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumbersOnlyInputDirective } from 'src/app/directive/numbersOnlyInput.directive';

const routes: Routes = [
    {
      path: '',
      component: RegistrarComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      ReactiveFormsModule,
      CommonModule,
      FormsModule,
    ],
    declarations: [
      RegistrarComponent, NumbersOnlyInputDirective
    ],
    exports: [RouterModule],
  })
export class RegistrarModule {}


