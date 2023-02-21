import { NgModule } from '@angular/core';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateProviderComponent } from './components/create-provider/create-provider.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateAdminComponent,
    AdminViewComponent,
    CreateProviderComponent
  ],
  imports: [
      MaterialModule,
      AdminRoutingModule,
       RouterModule
  ]
})
export class AdminModule { }
