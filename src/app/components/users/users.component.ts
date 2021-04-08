import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../common/services';
import { User } from '../../domain/models';
import { CommonComponent } from '../common.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-comp',
    templateUrl: 'users.component.html',
    providers: [UsersService],
})
export class UsersComponent extends CommonComponent implements OnInit {
    public users: Array<User> = [];

    constructor(private _usersService: UsersService, router: Router) {
        super(router);
    }

    ngOnInit(): void {
        console.log(this._router);
        this._usersService
            .getUsers()
            .subscribe(
                (data: Array<User>) => this.users = data,
                error => {
                    this.validationErrors = error.message;
                    console.log(error);
                }
            );
    }
}
