/**
 * Created by vlad on 26.09.17.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
