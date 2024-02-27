import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DecimalNumberDirective } from 'src/app/directive/valid-decimal.directive';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MaterialSharedModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [
    FormComponent,DecimalNumberDirective
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class FormModule { }
