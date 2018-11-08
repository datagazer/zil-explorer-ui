import { NgModule } from '@angular/core';

// Dependencies
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

export const DEPENDENCIES = [
  BrowserAnimationsModule
];

export const MODULES = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule
];

@NgModule({
  imports: [DEPENDENCIES, MODULES],
  exports: [MODULES]
})
export class MaterialModule {}
