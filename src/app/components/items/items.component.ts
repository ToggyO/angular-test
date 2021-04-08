import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonComponent } from '../common.component';
import { Item } from '../../domain/models/Item';

@Component({
    selector: 'app-items-comp',
    templateUrl: 'items.component.html',
})
export class ItemsComponent extends CommonComponent
{
    public item: Item = new Item();

    constructor(private router: Router){
        super(router);
    }

    public goToItem(myItem: Item): void
    {
        this.router.navigate(
            ['/item', myItem.id],
            {
                queryParams: {
                    product: myItem.product,
                    price: myItem.price
                }
            }
        );
    }
}
