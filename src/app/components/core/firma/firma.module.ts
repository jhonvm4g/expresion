import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirmaComponent } from './firma.component';
import { FirmaRoutingModule } from './firma-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    FirmaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
  ],
  declarations: [
    FirmaComponent,
  ]
})
export class FirmaModule { }
