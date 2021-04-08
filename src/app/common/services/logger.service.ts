import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService
{
    public write(logMessage:string)
    {
        console.log(logMessage);
    }
}
