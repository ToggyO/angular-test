import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Phone } from '../../domain/models';

@Component({
    selector: 'app-form-component',
    templateUrl: 'form.component.html',
})
export class FormComponent
{
    public phones: Array<Phone> = [];
    public companies: Array<string> = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];
    public phone = new Phone('', 0, this.companies[Math.floor(Math.random() * (this.companies.length - 1))]);

    public addPhone(title: NgModel, price: NgModel, comp: NgModel): void
    {
        console.log(title);
        console.log(price);
        console.log(comp);
        this.phones.push(
            new Phone(title.model, price.model, comp.model)
        );
    }

    public onTitleChange(): void
    {
        console.log(this.phone.title);
    }
}
