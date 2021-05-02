import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule,MatFormFieldModule, MatInputModule, MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatTableModule,MatCardModule,MatDividerModule,MatSnackBarModule  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { SUserService } from './s-user.service';
import { UserComponent } from './components/user/user.component';
import { OlduserComponent } from './components/olduser/olduser.component';
import { NewgemComponent } from './components/newgem/newgem.component';
import { OldgemComponent } from './components/oldgem/oldgem.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    OlduserComponent,
    NewgemComponent,
    OldgemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
     MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatCardModule,
      MatDividerModule,
      MatSnackBarModule,
      ReactiveFormsModule
    ],
  providers: [SUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
