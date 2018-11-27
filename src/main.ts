import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { API_URL } from '@zilliqa/core';

// Environment
import { environment } from 'environment';

// Application
import { AppModule } from './app/app.module';

{
  google.charts.load('current', { packages: ['line'] });

  google.charts.setOnLoadCallback(() => {
    const extraProviders = [
      { provide: API_URL, useValue: 'https://api-scilla.zilliqa.com' }
    ];

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);
  });
}
