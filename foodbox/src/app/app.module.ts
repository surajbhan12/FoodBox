import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ServicesService } from './services.service';
import { AddFoodComponent } from './add-food/add-food.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRecordComponent } from './user-record/user-record.component';
import { AdminRecordComponent } from './admin-record/admin-record.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserregisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AddFoodComponent,
    NavbarComponent,
    UserRecordComponent,
    AdminRecordComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
