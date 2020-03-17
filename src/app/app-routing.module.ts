import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { AuthguardsService } from './authguards.service';
import { MessageService } from './message.service';
import { DbhdsComponent } from './dbhds/dbhds.component';
import { Dbhdstemplate1Component } from './dbhdstemplate1/dbhdstemplate1.component';
import { DBHDS2Component } from './dbhds2/dbhds2.component';
import { DbhdsbestComponent } from './dbhdsbest/dbhdsbest.component';
const routes: Routes = 
[
         {path: '', 
          component:HomeComponent}, 
          {path: 'login', 
          component:LoginComponent },
          {path:'register', 
          component:RegisterComponent },
          {path:'about', 
          component:AboutComponent, canActivate: [AuthguardsService] },
          {path:'dbhds', 
          component:DbhdsComponent},
          {path:'dbhds1', 
          component:Dbhdstemplate1Component},
          {path:'dbhds2', 
          component:DBHDS2Component},
          {path:'dbhds3', 
          component:DbhdsbestComponent}
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
      
 }
