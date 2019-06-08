import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GameObjectResolver } from './_resolvers/gameObject.resolver';
import { DeviceDetailComponent } from './detail/devicedetail.component';
import { DeviceDetailResolver } from './_resolvers/devicedetail.resolver';

export const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent,
                resolve: { gameObjects: GameObjectResolver }
            },
            {
                path: 'detailed/:id',
                component: DeviceDetailComponent,
                resolve: { detail: DeviceDetailResolver }
            }]
    },
   { path: '', component: LoginComponent },
];
