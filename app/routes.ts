/**
 * Created by vlad on 29.09.17.
 */
import {
    LanguagesListComponent,
    SomePageComponent,
    CounterHostComponent,
    CardsPageComponent
} from './index';

export const routes = [
    { path: 'languages', component: LanguagesListComponent },
    { path: 'some-page', component: SomePageComponent },
    { path: 'counter-host', component: CounterHostComponent },
    { path: 'cards', component: CardsPageComponent },
    { path: '', redirectTo: 'some-page', pathMatch: 'full' }
];
