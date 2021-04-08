import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService
{
    private _data = ['Apple iPhone XR', 'Samsung Galaxy S9',  'Nokia 9'];

    constructor(private _logService: LoggerService) {}

    public getData(): Array<string>
    {
        this._logService.write("операция получения данных");
        return this._data;
    }

    public addData(name: string)
    {
        this._data.push(name);
        this._logService.write("операция добавления данных");
    }

    public removeData(name: string)
    {
        const index = this._data.findIndex(item => item === name);
        if (~index) {
            this._data = this._data.filter((_, i) => i !== index);
            this._logService.write("операция удаления данных");
        }
    }
}
