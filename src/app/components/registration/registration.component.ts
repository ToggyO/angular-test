import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration-comp',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent
{
    public registrationForm: FormGroup;

    constructor() {
        this.registrationForm = new FormGroup({
            userName: new FormControl('Rly', [Validators.required, this.userNameValidator]),
            userEmail: new FormControl('', [Validators.required, Validators.email]),
            phones: new FormArray([
                new FormControl('+7', [
                    Validators.pattern('[0-9]{10}'),
                    Validators.required,
                ]),
            ]),
        });
    }

    public get userPhones(): AbstractControl | null
    {
        return this.registrationForm.get('phones');
    }

    public addPhone(): void
    {
        (this.registrationForm.controls.phones as FormArray).push(
            new FormControl(
                '+7',
                [
                    Validators.pattern('[0-9]{10}'),
                    Validators.required,
                ]
            )
        );
    }

    public submit(): void
    {
        console.log(this.registrationForm);
    }

    public userNameValidator(control: FormControl): { [key: string]: boolean } | null
    {
        if (control.value === 'ololo')
        {
            return { userName: true };
        }
        return null;
    }
}
