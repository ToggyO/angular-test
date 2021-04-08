import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../domain/models';

@Component({
    selector: 'app-login-comp',
    templateUrl: 'login.components.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent
{
    public user: User = new User();

    public addUser(): void
    {
        console.log(this.user);
    }

    public submit(form: NgForm): void
    {
        console.log(form);
    }
}
