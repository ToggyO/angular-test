import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonComponent } from '../common.component';

@Component({
    selector: 'app-item-comp',
    templateUrl: 'item.component.html',
})
export class ItemComponent extends CommonComponent
{
    // private _subscription: Subscription;
    private _routeSubscription: Subscription;
    private _querySubscription: Subscription;

    public id: number;
    public product: string;
    public price: string;

    constructor(private _activateRoute: ActivatedRoute, router: Router)
    {
        super(router);
        // this._subscription = _activateRoute.params.subscribe(params => this.id = params.id);

        this._routeSubscription = _activateRoute.params.subscribe(params => this.id = params.id);
        this._querySubscription = _activateRoute.queryParams.subscribe(params => {
            this.product = params.product;
            this.price = params.price;
        });
    }

    public goHome(): void
    {
        if (this._router)
        {
            this._router.navigate(['']);
        }
    }

    // ngOnInit(): void
    // {
    //     this._activateRoute.paramMap
    //         .pipe(
    //             map(params => params.getAll('id'))
    //         )
    //         .subscribe(id => this.id = +id);
    // }
}
