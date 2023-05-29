import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {appRouting} from "./app/app.routing";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";


bootstrapApplication(AppComponent,{
    providers: [
    provideRouter(appRouting),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule, HttpClientModule),
    provideHttpClient(withInterceptors([])),
    provideAnimations()
]
}).then().catch((err) => console.error(err));
