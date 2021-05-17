import { Component, OnInit } from '@angular/core';
import { SUserService } from '../../s-user.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


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
        if(!user.approve){
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

   editUser(id){
    this.userService.approveUser(id).subscribe((res)=>{
      alert("successfully approve");
      this.fetchUsers();
    },(err)=>{
      alert("something wrong");
    });

   }


}

// editUser(id){
//   this.router.navigate([`/edit/${id}`]);
// }


