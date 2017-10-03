/**
 * Created by vlad on 28.09.17.
 */
import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css'],
    inputs: ["counterName"]
})
export class CounterComponent {
    counterName: string = 'Default Name';

    @Input()
    counterValue: number = 0;

    increment() {
        this.counterValue++;
    }
}
