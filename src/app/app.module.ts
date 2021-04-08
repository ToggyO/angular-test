import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Components } from './components';
import { Directives } from './common/directives';
import { Services } from './common/services';

@NgModule({
    declarations: [
        AppComponent,
        ...Directives,
        ...Components,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [...Services],
    bootstrap: [AppComponent]
})
export class AppModule { }
