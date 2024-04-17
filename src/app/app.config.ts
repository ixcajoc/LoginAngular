<<<<<<< HEAD
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes
    ), 
    provideClientHydration(),
  
    importProvidersFrom(
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    )
  ]

};
=======
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes
    ), 
    provideClientHydration(),
  
    importProvidersFrom(
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    )
  ]

};
>>>>>>> ed1772cfcc1bf866d98e5a5695a9d11872a7cbc2
