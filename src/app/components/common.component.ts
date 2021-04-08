import { Router } from '@angular/router';

export interface ICommonComponent
{
    loading: boolean;
    globalError: string;
    validationErrors: Array<any>;
}

export class CommonComponent implements ICommonComponent
{
    public loading = false;
    public globalError: string;
    public validationErrors: Array<any> = [];

    constructor(protected _router?: Router) {}
}
