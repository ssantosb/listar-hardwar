import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HardwareListComponent } from '../hardware/hardware-list/hardware-list.component';
import { HardwareDetailComponent } from '../hardware/hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from '../hardware/hardware-create/hardware-create.component';




const routes: Routes = [

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
  }

 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }