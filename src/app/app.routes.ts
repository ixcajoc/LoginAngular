import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import ('./login/login.component'),
    },

    {
        path: 'welcome',
        title: 'Welcome',
        loadComponent: () => import ('./welcome/welcome.component'),
    },

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    
    

];
