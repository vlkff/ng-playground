/**
 * A component skeleton
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "collapsible-box",
    templateUrl: 'collapsible-box.component.html',
    styleUrls: ['collapsible-box.component.css'],
})
export class CollapsibleBoxComponent {

    visible: boolean = true;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
