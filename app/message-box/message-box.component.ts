/**
 * A component skeleton
 */
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'message-box',
    templateUrl: 'message-box.component.html',
    styleUrls: ['message-box.component.css'],
})
export class MessageBoxComponent {

    @Input()
    title: string = 'Default Title';

    visible: boolean = true;

    onHide() {
        console.log('hide');
        this.visible = false;
    }
}
