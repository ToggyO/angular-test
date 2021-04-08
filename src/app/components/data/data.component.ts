import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { DataService } from '../../common/services';

@Component({
    selector: 'app-data-comp',
    templateUrl: './data.component.html',
})
export class DataComponent implements OnInit, OnChanges
{
    public items: Array<string> = [];
    public name: string;

    constructor(private _dataService: DataService) {}

    public addItem(name: string): void
    {
        this._dataService.addData(name);
    }

    public removeItem(name: string): void
    {
        this._dataService.removeData(name);
    }

    ngOnInit(): void
    {
        this.items = this._dataService.getData();
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        console.log(changes);
    }
}
