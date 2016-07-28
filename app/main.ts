import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

bootstrap(AppComponent, [
  appRouterProviders,
  provide(APP_BASE_HREF, {useValue : '/' })
]);
