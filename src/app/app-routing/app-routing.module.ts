import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { HomeComponent } from '../home/home.component';
import { HardwareListComponent } from '../hardware/hardware-list/hardware-list.component';
import { HardwareDetailComponent } from '../hardware/hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from '../hardware/hardware-create/hardware-create.component';

import {ProjectListComponent} from '../project/project-list/project-list.component';
import {ProjectDetailComponent} from '../project/project-detail/project-detail.component';
import {ProjectCreateComponent} from '../project/project-create/project-create.component';

import { ProviderListComponent } from '../provider/provider-list/provider-list.component';
import { ProviderDetailComponent } from '../provider/provider-detail/provider-detail.component';

import { IterationListComponent } from "../iteration/iteration-list/iteration-list.component";
import {IterationDetailComponent} from '../iteration/iteration-detail/iteration-detail.component';
import {IterationCreateComponent} from '../iteration/iteration-create/iteration-create.component';


const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    {
    path: "providers",
    children: [
      {
        path: "list",
        component: ProviderListComponent
      },
      {
        path: ":id",
        component: ProviderDetailComponent
      }
    ]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'hardwares',
    children: [{
      path: 'list',
      component: HardwareListComponent
    },
    {
      path: ':id',
      component: HardwareDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'create',
      component: HardwareCreateComponent

    }
    ]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'projects',
    children: [{
      path: 'list',
      component: ProjectListComponent,

    },
    {
      path: ':id',
      component: ProjectDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'create',
      component: ProjectCreateComponent,
      outlet:'detail'
    }
    ]
  },
  {
    path: "iterations",
    children: [
      {
        path: "list",
        component: IterationListComponent
      },
      {
        path: ':id',
        component: IterationDetailComponent,
        outlet:'detail'
      },
      {
        path:'create',
        component: IterationCreateComponent
      }
    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
