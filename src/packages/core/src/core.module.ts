import { NgModule } from '@angular/core';

// Dependencies
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { ApiService } from './services/api.service';

export const DEPENDENCIES = [
  BrowserModule
];

export const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule
];

export const SERVICES = [
  ApiService
];

@NgModule({
  imports: [DEPENDENCIES, MODULES],
  exports: [MODULES],
  providers: [SERVICES]
})
export class CoreModule {}
