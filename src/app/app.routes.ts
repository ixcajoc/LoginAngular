<<<<<<< HEAD
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import ('./login/login.component'),
        // canMatch:[authGuard],
    },

    {
        path: 'welcome',
        title: 'Welcome',
        loadComponent: () => import ('./components/welcome/welcome.component'),
        canMatch:[authGuard],
    },
    {
        path: "details/:id",
        title: 'User Datails',
        loadComponent: () => import ('./components/welcome/user-information/user-information.component'),
        canMatch:[authGuard]
    },

    {
        path: 'new-user',
        title: 'New User',
        loadComponent: () => import ('./components/new-user/new-user.component'),
        canMatch:[authGuard],
    },

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        title:"Not-found",
        loadComponent: () => import ('./components/not-found/not-found.component'),
        // canMatch:[authGuard],
    }
    
    

];
=======
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
>>>>>>> ed1772cfcc1bf866d98e5a5695a9d11872a7cbc2
