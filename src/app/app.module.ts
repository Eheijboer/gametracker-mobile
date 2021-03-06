import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { ResulttableComponent } from './resulttable/resulttable.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { appRoutes } from './routes';


import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './_services/auth.service';
import { GameObjectResolver } from './_resolvers/gameObject.resolver';
import { DeviceDetailComponent } from './detail/devicedetail.component';
import { DeviceDetailResolver } from './_resolvers/devicedetail.resolver';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ResulttableComponent,
        LoginComponent,
        DeviceDetailComponent
    ],
    imports: [
        BrowserModule,
        Ng2SearchPipeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppComponent,
        AuthService,
        GameObjectResolver,
        DeviceDetailResolver
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
