import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { AuthguardsService } from './authguards.service'
//import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { DbhdsComponent } from './dbhds/dbhds.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SlidedataService} from './slidedata.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Dbhdstemplate1Component } from './dbhdstemplate1/dbhdstemplate1.component';
import { DBHDS2Component } from './dbhds2/dbhds2.component';
import { DbhdsbestComponent } from './dbhdsbest/dbhdsbest.component';
@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DbhdsComponent,
    Dbhdstemplate1Component,
    DBHDS2Component,
    DbhdsbestComponent,
    
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    VgControlsModule,
    VgCoreModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService,AuthguardsService,MessageService,SlidedataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
