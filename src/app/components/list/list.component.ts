import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';


import { user } from '../../user.model';
import { SUserService } from '../../s-user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  user:user[]; 
  constructor(private userService: SUserService, private router:Router) { }

  ngOnInit() {
this.fetchUsers();
  }

  fetchUsers(){
    this.userService
    .getUsers()
    .subscribe((data:user[])=>{
      this.user=data;
      console.log('Data requested...');
      console.log(this.user);
    });
  }

  editUser(id){
    this.router.navigate([`/edit/${id}`]);
 }

 deleteUser(id){
   this.userService.deleteUser(id).subscribe(()=>{
     this.fetchUsers();
   });
 }

}
