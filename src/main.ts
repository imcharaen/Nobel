import { enableProdMode } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  exports: [MatExpansionModule]

