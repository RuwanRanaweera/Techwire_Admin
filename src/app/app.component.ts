import { Component } from '@angular/core';
import { SUserService } from './s-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public userService: SUserService) {  if(+localStorage.getItem('adminId')>0){
    this.userService.isLogin=true;
  } }
  logOut(){
    this.userService.isLogin=false;
    localStorage.removeItem('adminId');
  }

}
