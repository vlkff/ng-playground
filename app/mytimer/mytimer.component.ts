/**
 * Alternative implementation of timer example.
 * Emit event
 */
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mytimer',
    templateUrl: 'mytimer.component.html',
    styleUrls: ['mytimer.component.css'],
})
export class MytimerComponent {

    value: number = 0;

    interval: any;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    doTick() {
        this.value++;
        this.tick.emit(this.value);
    }

    onStart() {
        let that = this;
        this.interval = setInterval(() => {
            this.doTick();
        }, 1000);
    }


    onStop() {
        clearInterval(this.interval);
    }

    onReset () {
        this.value = 0;
    }
}
