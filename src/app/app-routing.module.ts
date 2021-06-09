import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { NewgemComponent } from './components/newgem/newgem.component';
import { OldgemComponent } from './components/oldgem/oldgem.component';
import { OlduserComponent } from './components/olduser/olduser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {  MeeetingComponent } from './components/meeeting/meeeting.component';
import {  OldmeetComponent } from './components/oldmeet/oldmeet.component';
import {  BidingComponent } from './components/biding/biding.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path: 'list', component:ListComponent },
   {path: 'home', component:HomeComponent },
   {path: 'create', component:CreateComponent },
   {path: 'edit/:id', component:EditComponent },
   {path: 'login', component:LoginComponent },
   {path: 'user', component:UserComponent },
   {path: 'olduser', component:OlduserComponent },
   {path: 'dashboard', component:DashboardComponent},
   {path: 'newgem', component:NewgemComponent},
   {path: 'oldgem', component:OldgemComponent},
   {path: 'meeting', component: MeeetingComponent},
   {path: 'oldmeet', component: OldmeetComponent},
   {path: 'biding', component: BidingComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
