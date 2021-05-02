import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
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


// checklogin(email,password) {
// if(email==='s@g.c'&&password==='1234'){
//   this.router.navigate(['/list']);


// }
// else{
// console.log('errrrrr');
// }


// }


checklogin(email,password){
  this.userService.loginUser(email,password).subscribe(()=>{
    this.snackBar.open(' Successfully','Ok',{duration:3000});
    this.router.navigate(['/login']);
  });

}


  ngOnInit() {
  }

}
