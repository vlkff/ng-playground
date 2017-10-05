/**
 * A component skeleton
 */
import {Component, Input, OnInit, OnChanges, OnDestroy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'message-box',
    templateUrl: 'message-box.component.html',
    styleUrls: ['message-box.component.css'],
})
export class MessageBoxComponent implements OnInit, OnChanges, OnDestroy {

    @Input()
    title: string = 'Default Title';

    visible: boolean = true;

    onHide() {
        console.log('hide');
        this.visible = false;
    }

    ngOnInit() {
        console.log('run on-init');
    }

    ngOnDestroy() {
        console.log('run on-destroy');
    }

    ngOnChanges() {
        console.log('run on-changes');
    }
}
