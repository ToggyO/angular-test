import { Component, ViewChild } from '@angular/core';

import { PurchaseComponent } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent {
    @ViewChild(PurchaseComponent, { static: false })
    private _purchaseComponent: PurchaseComponent;

    public title = 'angular-test';
    public counter = 0;
    public condition = true;

    public increment(): void
    {
        this.counter++;
    }

    public decrement(): void
    {
        this.counter++;
    }

    public addItem(): void
    {
        this._purchaseComponent.addItem('test', 69);
    }

    public toggleCondition(): void
    {
        this.condition = !this.condition;
    }
}
