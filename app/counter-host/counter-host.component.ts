/**
 * Created by vlad on 28.09.17.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter-host',
    templateUrl: 'counter-host.component.html',
    styleUrls: ['counter-host.component.css'],
})
export class CounterHostComponent {

    timerActive: boolean;

    innerCounter: number = 0;

    onTick(tick) {
        console.log('Tick is:' + tick);
    }

    incrementInnerCounter() {
        this.innerCounter++;
    }
}
