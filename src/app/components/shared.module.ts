import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

const MAT_MODULES = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
];
const BASIC_MODULES = [FormsModule, ReactiveFormsModule];
@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ...MAT_MODULES, BASIC_MODULES],
  exports: [...MAT_MODULES, ...BASIC_MODULES],
})
export class SharedModule { }
