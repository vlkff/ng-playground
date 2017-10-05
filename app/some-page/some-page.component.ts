/**
 * A component skeleton
 */
import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CollapsibleBoxComponent} from '../collapsible-box/collapsible-box.component';

@Component({
    moduleId: module.id,
    selector: 'some-page',
    templateUrl: 'some-page.component.html',
    styleUrls: ['some-page.component.css'],
})
export class SomePageComponent {

    @ViewChildren(CollapsibleBoxComponent)
    boxes: QueryList<CollapsibleBoxComponent>;

    @ViewChild('second')
    second_box: CollapsibleBoxComponent;

    constructor() {
        console.log('run constructor');
        //this.collapsible = new CollapsibleBoxComponent();
        //console.log(this);
    }

    showAllBox() {
        this.boxes.forEach(function (box:CollapsibleBoxComponent) {
            box.show();
            console.log(box);
        });
    }

    hideAllBox() {
        this.boxes.forEach(function (box:CollapsibleBoxComponent) {
            box.hide();
            console.log(box);
        });
    }

    showSecondBox() {
        this.boxes.toArray()[1].show();
        //this.second_box.show();
    }

    hideSecondBox() {
        this.second_box.hide();
    }
}
