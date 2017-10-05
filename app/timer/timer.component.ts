/**
 * Demo events emitting to parent component.
 */

import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "timer",
    templateUrl: "timer.component.html"
})
export class TimerComponent {
    private intervalObject: any;
    private currentValue: number = 0;

    @Input()
    active: boolean;

    @Input()
    interval: number = 1000;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    start() {
        if (this.intervalObject) return;

        this.active = true;
        this.intervalObject = setInterval(() => { this.callback() }, this.interval);
    }

    stop() {
        if(!this.intervalObject) return;

        this.active = false;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback() {
        this.currentValue++;
        this.tick.emit(this.currentValue);
    }
}