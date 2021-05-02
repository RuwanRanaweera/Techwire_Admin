import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { OlduserComponent } from '../olduser/olduser.component';



const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch: 'full' },

   {path: 'user', component:UserComponent },
   {path: 'olduser', component:OlduserComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
