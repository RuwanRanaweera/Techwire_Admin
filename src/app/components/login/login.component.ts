import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { SUserService } from '../../s-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  createForm:FormGroup;
  constructor(private userService: SUserService,private router:Router,private fb:FormBuilder) {
    this.createForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
      });
   }

   ngOnInit() {

     if(localStorage.getItem('adminId')!=null)
    this.router.navigateByUrl('/login');

  }
  checklogin(email:any,password:any){
    this.userService.login(email,password).subscribe(
      (res:any )=> {
        localStorage.setItem('adminId',res.data[0].adminId);
        this.userService.isLogin=true;
      console.log(res);
        this.router.navigateByUrl('/user');
        alert("Login successfully ");
        console.log("Login Successfully");

      },
      err => {
        if(err.status === 400)
        console.log("incorrect username or password");
        else
        console.log(err);
      }
    );

  }


}


