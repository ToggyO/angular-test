import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    OnInit,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit, ContentChild, ElementRef,
} from '@angular/core';

class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent {
    public text = '';
    public price = 0;
    @Input() public title: string;
    @Output() public onIncremented = new EventEmitter<number>();
    @ContentChild('headerContent', { static: false }) private _header: ElementRef;

    public items: Item[] =
        [
            { purchase: 'Хлеб', done: false, price: 15.9 },
            { purchase: 'Масло', done: false, price: 60 },
            { purchase: 'Картофель', done: true, price: 22.6 },
            { purchase: 'Сыр', done: false, price: 310 }
        ];

    public addItem(text: string, price: number): void
    {
        if (text == null || text.trim() === '' || price == null)
        {
            return;
        }
        this.items.push(new Item(text, price));
    }

    public incrementParentCounter(): void
    {
        this.onIncremented.emit();
    }

    public change(): void
    {
        console.log(this._header);
        this._header.nativeElement.textContent = 'Hell to world!';
    }
}
