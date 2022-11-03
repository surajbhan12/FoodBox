import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRecordComponent } from './admin-record/admin-record.component';
import { AdminComponent } from './admin/admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRecordComponent } from './user-record/user-record.component';
import { UserComponent } from './user/user.component';
import { UserregisterComponent } from './userregister/userregister.component';




const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'addFood',component:AddFoodComponent},
  {path:'userdashboard/userrecord',component:UserRecordComponent},
  {path:'admindashboard/adminrecord',component:AdminRecordComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'userdashboard',component:UserDashboardComponent},
  {path:'user/userregister',component:UserregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
