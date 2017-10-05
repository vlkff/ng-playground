/**
 * Created by vlad on 28.09.17.
 */
import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {OnInit, OnChanges, DoCheck, OnDestroy} from '@angular/core';
import {AfterViewInit, AfterViewChecked} from '@angular/core';
import {AfterContentInit, AfterContentChecked} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css'],
    inputs: ["counterName"]
})
export class CounterComponent implements
    OnInit, OnChanges, DoCheck, OnDestroy,
    AfterViewInit, AfterViewChecked,
    AfterContentInit, AfterContentChecked
{
    counterName: string = 'Default Name';

    @Input()
    counterValue: number = 0;


    log(msg:any) {
        console.log(msg);
    }

    ngOnInit () {
        this.log('OnInit');
    }

    ngOnDestroy () {
        this.log('OnDesctory');
    }

    ngDoCheck () {
        this.log('DoCheck');
    }

    ngOnChanges (changes: {}) {
        console.log(changes);
        console.log('I was changed !');
    }

    ngAfterViewInit () {
        this.log('AfterViewInit');
    }

    ngAfterViewChecked() {
        this.log('AfterViewChecked');
    }

    ngAfterContentInit() {
        this.log('AfterContentInit');
    }

    ngAfterContentChecked () {
        this.log('AfterContentChecked');
    }

    increment() {
        this.counterValue++;
        this.log('Increment');
    }
}
