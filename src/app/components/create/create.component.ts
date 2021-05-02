import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

import { SUserService } from '../../s-user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  [x: string]: any;
createForm:FormGroup;
  constructor(private userService: SUserService,private router:Router,private fb:FormBuilder) {
    this.createForm=this.fb.group({
    fullName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
    });
  }

  addUser(name,email,password){
    this.userService.addUser(name,email,password).subscribe(()=>{
      this.snackBar.open(' Successfully','Ok',{duration:3000});
      this.router.navigate(['/login']);
    });

  }

  ngOnInit() {
  }

}
