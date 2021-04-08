import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, WebUser } from '../../domain/models';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<Array<User>>
    {
        return this.http
            .get<{ usersList: Array<WebUser> }>('../../assets/users.json')
            .pipe(
                map(
                ({ usersList }) =>
                    usersList.map<User>(
                        (webUser) => ({
                            name: webUser.userName,
                            email: webUser.userEmail,
                            phone: webUser.userPhone,
                        })
                    )
                )
            );
    }
}
