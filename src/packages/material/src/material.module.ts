import { NgModule } from '@angular/core';

// Dependencies
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
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
  MatAutocompleteModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
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
