import { Component, OnInit } from '@angular/core';
import { SUserService } from '../../s-user.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-olduser',
  templateUrl: './olduser.component.html',
  styleUrls: ['./olduser.component.css']
})
export class OlduserComponent implements OnInit {

  constructor(private userService: SUserService, private router:Router) { }

  ngOnInit() {
    this.fetchUsers();
  }
  userList;
  userListApprove=[];
  fetchUsers(){
    this.userService
    .getUsers()
    .subscribe((res:any)=>{
      console.log(res.data);
      console.log('Data requested...');

      this.userList=res.data;


      let indx=0;
      this.userList.forEach((user)=>{
        if(user.approve){
          this.userListApprove[indx] =user;
          indx++;
        }
      });
    });
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(()=>{
      this.fetchUsers();
    });
   }

}
